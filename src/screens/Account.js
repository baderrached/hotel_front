
import React, { Component,useEffect,useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  AsyncStorage
 
} from 'react-native';
import { TextInput } from 'react-native-paper';
import {
  COLORS,
  SIZES,
  FONTS,
  images,
  optionItems,
  destinations,
  
} from '../constants';
import axios from 'axios'
const Account = ({navigation}) => {
  const [user,setUser]=useState('')
  const [room,setRoom]=useState(true)
  const getUsername=async () =>{
    let usssername=await AsyncStorage.getItem('user')
    usssername=JSON.parse(usssername);
    setUser(usssername);
    try {
      let room=await AsyncStorage.getItem('room')
      
    } catch (error) {
      console.log(error);
    }


   
  }
  const updateObejct=(attr,value)=>{
    
    user[attr]=value;
    console.log(user);
    setUser(user)
    console.log(`changed ${attr}`);

  }
  const udpateUser=async()=>{
const update=await axios.post(`http://192.168.1.16:3000/update/users/${user.id}`,user)
alert('profile updated')
await AsyncStorage.setItem(
  'user',
  JSON.stringify(update.data)
);
  }
  const checkRoomService=async()=>{
    let check=await axios.get(`http://192.168.1.16:3000/room_requests/${user.id}`)
    setRoom(check.data.available)
  }
  const RequestRommService=async () =>{
    let request=await axios.post(`http://192.168.1.16:3000/room_requests/${user.id}`)
    
   alert(request.data.message)
    // setRoom(false)
  }
useEffect(()=>{
  getUsername()
  checkRoomService()
  console.log('bb');
})
  
    return (
      <ScrollView style={styles.container}>
      

          <View style={styles.body}>
            <View style={styles.bodyContent}>
            <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="username"
              defaultValue={user.username}
              disabled
            />
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="First name"
              defaultValue={user.first_name}
              onChangeText={e=>{
                updateObejct("first_name",e)
              }}
            />
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
        </View>
         <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="last name"
              defaultValue={user.last_name}
              onChangeText={e=>{
                updateObejct("last_name",e)
              }}
            />
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="passport/cin"
              defaultValue={user.passeport_cin}
              onChangeText={e=>{
                updateObejct("passeport_cin",e)

              }}
              disabled

            />
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
        </View>
        <View style={styles.inputContainer}>

        <TextInput style={styles.inputs}
              placeholder="password"
              defaultValue={user.password}
              secureTextEntry
              onChangeText={e=>{
                updateObejct("password",e)
              }}
            />
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
        </View>

        <TouchableOpacity style={styles.buttonContainer}
        onPress={() =>udpateUser()}
        >
          <Text style={styles.loginText}>Update</Text>
        </TouchableOpacity>
        {
          room?(
<TouchableOpacity style={styles.buttonContainer} onPress={() =>RequestRommService()}>
          <Text style={styles.loginText}>request room service</Text>
        </TouchableOpacity>
          ):
          (<TouchableOpacity style={styles.buttonContainer} disabled>
          <Text style={styles.loginText}>room service on it's way</Text>
        </TouchableOpacity>)
        }
        
        <TouchableOpacity style={styles.logoutContainer} onPress={async () =>{
                  await AsyncStorage.removeItem("username");
                  navigation.navigate('Onboarding')

        }}>
          <Text style={styles.loginText}>logout</Text>
        </TouchableOpacity>
     
             
            </View>
        </View>
      </ScrollView>
    );
  }
  export default Account;


const styles = StyleSheet.create({
  header:{
    backgroundColor: "#000",
  },
  inputContainer: {
    borderBottomColor: COLORS.white,
    backgroundColor: COLORS.white,
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: COLORS.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor:COLORS.white,
    backgroundColor: COLORS.white,
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
  container: {
    flex: 2,
    backgroundColor: COLORS.white,
    marginTop:30
  },
  headerContent:{
    padding:10,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  profileDetail:{
    alignSelf: 'center',
    marginTop:200,
    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:20,
    color: "#00CED1"
  },
  count:{
    fontSize:18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:50,
    marginTop:40
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#5390ff",
  },
  logoutContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "red",
  },
  description:{
    fontSize:20,
    color: "#00CED1",
    marginTop:10,
    textAlign: 'center'
  },
});