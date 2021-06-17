
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
 
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

const Account = ({navigation}) => {

  
    return (
      <SafeAreaView style={styles.container}>
          <View style={{backgroundColor:COLORS.primary}}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar2.png'}}/>
                <Text style={styles.name}>
                  John Doe
                </Text>
            </View>
          </View>

          <View style={styles.profileDetail}>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Reservation</Text>
              <Text style={styles.count}>200</Text>
            </View>
           
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>
            <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              secureTextEntry={true}
            />
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              secureTextEntry={true}
            />
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
        </View>
         <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              secureTextEntry={true}
            />
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              secureTextEntry={true}
            />
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.loginText}>Update</Text>
        </TouchableOpacity>
             
            </View>
        </View>
      </SafeAreaView>
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
  description:{
    fontSize:20,
    color: "#00CED1",
    marginTop:10,
    textAlign: 'center'
  },
});