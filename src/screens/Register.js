import React from 'react';
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

const Register = ({navigation}) => (
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
              secureTextEntry={true}
              underlineColorAndroid='transparent'/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png'}}/>
          <TextInput style={styles.inputs} 
              placeholder="Passeport number"
              secureTextEntry={true}
              underlineColorAndroid='transparent'/>
        </View>





        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://icons-for-free.com/iconfiles/png/512/lock+password+protect+safety+security+icon-1320086045132546966.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://icons-for-free.com/iconfiles/png/512/lock+password+protect+safety+security+icon-1320086045132546966.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Re-Password"
              secureTextEntry={true}
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
        onPress={() => navigation.navigate('Onboarding')}>
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

export default Register;
