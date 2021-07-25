import React, { Component ,useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView,
  SafeAreaView,
  AsyncStorage
} from 'react-native';
import { images } from '../constants';
import { rooms } from '../constants/data';
import axios from 'axios'

  const Reservation = ({navigation}) => {
const [user,setUser]=useState()
const [room,setRoom]=useState({
  allrooms:[]
})

    const getUserRoom=async()=>{
      let usssername=await AsyncStorage.getItem('user')
      console.log(usssername);
      usssername=JSON.parse(usssername);
      setUser(usssername);
      axios.get(`http://192.168.1.16:3000/findRoom/${usssername.id}`).then((Response)=>{
        console.log(Response.data);
        setRoom(Response.data)
        
    })
    }
    useEffect(()=>{
      getUserRoom()
    },[])
    return (
      <SafeAreaView style={styles.container}>
        <FlatList 
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={room.allrooms}
          renderItem={({item}) => {
            if(  item.status=="0"){
      
        return (
          <TouchableOpacity style={styles.card} 
          disabled
          onPress={() => navigation.navigate('Extra')}
          >
            <Image style={styles.image} source={{uri:item.room_id.image}}/>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Reservation number : {item.id}</Text>
              <Text style={styles.count}>from : {item.from}</Text>
              <Text style={styles.count}>to : {item.to}</Text>

             
            </View>
          </TouchableOpacity>
        
  )
            }else{
              return (
                <TouchableOpacity style={styles.card} 
      
          onPress={() => navigation.navigate('Extra')}
          >
            <Image style={styles.image} source={{uri:item.room_id.image}}/>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Reservation number : {item.id}</Text>
              <Text style={styles.count}>from : {item.from}</Text>
              <Text style={styles.count}>to : {item.to}</Text>

             
            </View>
          </TouchableOpacity>
              
        )
            }
          }
}/>
      </SafeAreaView>
    );
          
}
export default Reservation;
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"white"
  },
  contentList:{
    flex:1,
    marginTop : 25
  },
  cardContent: {
    marginTop:10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#3399ff",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#6666ff"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#dcdcdc",
  },
  followButtonText:{
    color: "#dcdcdc",
    fontSize:12,
  },
}); 
