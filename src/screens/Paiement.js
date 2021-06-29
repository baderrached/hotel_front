import React, { useEffect, useState } from 'react';
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

const Paiement = ({route,navigation}) => {
  const data = route.params.room
  const [room,setRoom]=useState([])
  useEffect(()=>{
setRoom(data)
  },[])

  
  return(
  <SafeAreaView style={styles.container}>
    <View style={{flex: .5, alignItems: 'flex-start', justifyContent: 'center'}}>
    <Image
        source={images.card}
        resizeMode="contain"
        style={{height: '100%', width: '100%'}}
      />
    </View>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
    

        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png'}}/>
          <TextInput style={styles.inputs} 
              placeholder="Card Number"
              
              underlineColorAndroid='transparent'/>
        </View>





        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://icons-for-free.com/iconfiles/png/512/lock+password+protect+safety+security+icon-1320086045132546966.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Expiration Date"
              
              underlineColorAndroid='transparent'/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://icons-for-free.com/iconfiles/png/512/lock+password+protect+safety+security+icon-1320086045132546966.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="CVV"
            
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
        onPress={() => navigation.navigate('Reservation')}>
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
          <Text style={{color: COLORS.white, ...FONTS.h3}}>Confirm</Text>
        </LinearGradient>
      </TouchableOpacity>

      
    </View>
  </SafeAreaView>

);}

export default Paiement;
