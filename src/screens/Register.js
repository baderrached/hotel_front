import React ,{useState}from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

import {COLORS, images, SIZES, FONTS, styles} from '../constants';
import axios from 'axios'
const Register = ({navigation}) => {
  const [username,setUsername]=useState('');
  const [passport,setPassport]=useState('');
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState('');
const submit=async()=>{
  console.log(username,passport,password);
  if(username==''){
    alert('username cannot be empty')
  }
  else if(passport==''){
    alert('passport/CIN cannot be empty')

  }
  else if(password==''){
    alert('password cannot be empty')

  }
  else if(password!==confirmPassword){
    alert('password and confirm doesn\'t match')

  }
  else if(username!=='' && passport !=='' && (password==confirmPassword)!==" "){
    const register=await axios.post(`http://192.168.1.12:3000/register?username=${username}&passpoot=${passport}&password=${password}`)
    navigation.navigate('OnBoarding')
  }
}
  return (
  <SafeAreaView style={styles.container}>
    <View style={{flex: 0.5, alignItems: 'flex-start', justifyContent: 'center'}}>
    <Image
        source={images.logo}
        resizeMode="contain"
        style={{height: '30%', width: '100%'}}
      />
    </View>
    <View style={{flex: 0.7, alignItems: 'center', justifyContent: 'flex-start'}}>
     
        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png'}}/>
          <TextInput style={styles.inputs} 
              placeholder="Username"
              underlineColorAndroid='transparent'
              value={username}
              onChangeText={text=>setUsername(text)}
              />
        </View>

        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png'}}/>
          <TextInput style={styles.inputs} 
              placeholder="Passeport/CIN number"
              underlineColorAndroid='transparent'
               value={passport}
              onChangeText={e=>setPassport(e)}
              />
        </View>





        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://icons-for-free.com/iconfiles/png/512/lock+password+protect+safety+security+icon-1320086045132546966.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              value={password}
              onChangeText={e=>setPassword(e)}
              />
        </View>

        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://icons-for-free.com/iconfiles/png/512/lock+password+protect+safety+security+icon-1320086045132546966.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Re-Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              value={confirmPassword}
              onChangeText={e=>setConfirmPassword(e)}
/>
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
        onPress={() => submit()}>
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
          <Text style={{color: COLORS.white, ...FONTS.h3}}>Sign up !</Text>
        </LinearGradient>
      </TouchableOpacity>

      
    </View>
  </SafeAreaView>
);
        }
export default Register;
