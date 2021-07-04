import React,{useState,useEffect,useContext} from 'react';
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
import { Tab,TabView } from 'react-native-elements';
import {COLORS, images, SIZES, FONTS, styles} from '../constants';

const Extra = () => {

  // const Tab = createMaterialTopTabNavigator();
  const [index,setIndexx]=useState(0);
  const setIndex=()=>{
  // setIndexx(0)
  alert(index)
  }
  useEffect(()=>{

  },[index])
  return(
    
    <SafeAreaView style={styles.container}>
    <Tab value={index} onChange={(e)=>{
setIndexx(e)
 }}>
  <Tab.Item type={"clear"} title="Cuisine w boissons" variant={'primary'} titleStyle={{color:'black',fontSize:12}} buttonStyle={{backgroundColor:'white'}}/>
  <Tab.Item title="Gratuité" variant={'primary'} titleStyle={{color:'black',fontSize:12}} buttonStyle={{backgroundColor:'white'}}/>
  <Tab.Item title="cart" variant={'primary'} titleStyle={{color:'black',fontSize:12}} buttonStyle={{backgroundColor:'white'}}/>
</Tab>

 <TabView value={index}  >
  <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
    <Text h5>Cuisine w boissons </Text>
  </TabView.Item>
  <TabView.Item >
    <Text h1>Gratuité</Text>
  </TabView.Item>
  <TabView.Item >
    <Text h1>Spa and gym </Text>
  </TabView.Item>
</TabView>
</SafeAreaView>
  )
}
  


export default Extra;