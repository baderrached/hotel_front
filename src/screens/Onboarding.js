import React, { useState, } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  AsyncStorage
} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

import {COLORS, images, SIZES, FONTS, styles} from '../constants';
import axios from 'axios'
const Onboarding = ({navigation}) => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
const submit=async()=>{

<<<<<<< Updated upstream
const post=await axios.post('http://192.168.1.16:3000/login',{
=======
const post=await axios.post('http://192.168.1.184 :3000/login',{
>>>>>>> Stashed changes
  "username":username,
  "password":password
})
if (post.data.error==0){
  try {
    console.log(JSON.stringify(post.data.user));
    await AsyncStorage.setItem(
      'user',
      JSON.stringify(post.data.user)
    );
   navigation.navigate('Home')

  } catch (error) {
    // Error saving data
  }

}else{
  alert('wrong username/password')
  console.log('erreur');
}
}
  return(
  <SafeAreaView style={styles.container}>
    <View style={{flex: 0.7, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={images.logo}
        resizeMode="contain"
        style={{height: '50%', width: '50%'}}
      />
    </View>
    <View style={{flex: 0.7, alignItems: 'center', justifyContent: 'flex-start'}}>
     
      <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]}
           source={{uri: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Username"
              onChangeText={text => setUsername(text)}
              underlineColorAndroid='transparent'/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://icons-for-free.com/iconfiles/png/512/lock+password+protect+safety+security+icon-1320086045132546966.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
              underlineColorAndroid='transparent'/>
        </View>
       
      <TouchableOpacity
        style={[
          styles.shadow,
          {
            marginTop: SIZES.padding * 0.5,
            width: '70%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}
        onPress={()=>{
          submit()
        }}>
        <LinearGradient
          style={{
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
          }}
          colors={['#46aeff', '#5884ff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={{color: COLORS.white, ...FONTS.h3}}>Login !</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity 
       style={styles.buttonContainer}
       onPress={() => navigation.navigate('Register') }>
       
        <Text>Register</Text>
        </TouchableOpacity>
    </View>
  </SafeAreaView>
);}

export default Onboarding;
