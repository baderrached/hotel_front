import React, { useEffect, useState,useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  FlatList,
  ToastAndroid
} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
import { AppCont } from "./AppContext";
import axios from 'axios'
import {COLORS, images, SIZES, FONTS, styles} from '../constants';
import AwesomeAlert from 'react-native-awesome-alerts';

const Card = ({route,navigation}) => {
  
  var [cart, setCart] = useContext(AppCont);
  const Remove=(item)=>{
    var index = cart.indexOf(item);
    let panier;
    console.log(cart.length==1);

    if(index==0 && cart.length==1){
      setCart([])
    }
    else if (index > -1) { //Make sure item is present in the array, without if condition, -n indexes will be considered from the end of the array.
      setCart(cart.splice(index, 1))
      console.log(index);

    }
    
  }
  const submit=async()=>{
    console.log(cart);
    const order={
      "user_id":123,
      "room_id":1,
      "orders":cart
    }
    const CreateOrder=await axios.post('http://192.168.1.16:3000/CreateOrder',order)
    setCart([])
    setAlert(!alert)
  
  }
  useEffect((
    
  )=>{},[cart])
  const [alert,setAlert]=useState(false)
  return(
  <View style={styless.container}>
     <AwesomeAlert
          show={alert}
          showProgress={false}
          title="Order"
          message="Confirm Order?"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No"
          confirmText="Yes"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
setAlert(!alert)          }}
          onConfirmPressed={() => {
submit()          }}
        />
      <Text style={styless.title} > Submit your order please </Text>
   <ScrollView style={{backgroundColor:"#FFFFFF"}}>
        <FlatList 
          style={styless.contentList}
          columnWrapperStyle={styless.listContainer}
          data={cart}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={styless.card} onPress={() => {this.clickEventListener(item)}}>
            <Image style={styless.image} source={{uri: 'https://french-iceberg.com/wp-content/uploads/2021/05/French-Taco-1200x675.jpg'}}/>
            <View style={styless.cardContent}>
              <Text style={styless.name}>{item.name} </Text>
              <Text style={styless.count}>{item.description}</Text>
              <TouchableOpacity style={styless.followButton} onPress={()=>{
                Remove(item)
              }}
              >
              <Text style={styless.followButtonText}>Remove from cart</Text>
        
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          )}}></FlatList>
          

     
          
             
              <View style={{alignItems :'center'}}> 
            <TouchableOpacity
                style={[
                styles.shadow,
                {
                    marginTop: SIZES.padding * 0.5,
                    width: '40%',
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                ]}
                onPress={()=>{
             setAlert(!alert)
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
                <Text style={{color: COLORS.white, ...FONTS.h3}}>Order now</Text>
                </LinearGradient>
            </TouchableOpacity>
            </View>
          
          {/* }}/> */}
      </ScrollView>
  </View>

);}

const styless = StyleSheet.create({
    container:{
        flex: 2,
        backgroundColor: COLORS.white,
        
    
    },
    contentList:{
      flex:1,
    },
    title:{
        fontSize:25,
        paddingTop:20,
        alignSelf:'center',
        color:"black",

    },
    cardContent: {
      marginLeft:20,
   
    },
    image:{
      width:90,
      height:90,
      borderRadius:45,
      borderWidth:2,
      borderColor:"#ebf0f7"
    },
  
    card:{
      shadowColor: '#FFFFFF',
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
      backgroundColor:"#FFFFFF",
      padding: 10,
      flexDirection:'row',
      borderRadius:30,
    },
  
    name:{
      fontSize:18,
      flex:1,
      alignSelf:'flex-start',
      color:"black",
      fontWeight:'bold'
    },
    count:{
      fontSize:12,
      flex:1,
      alignSelf:'flex-start',
      color:"grey",
       
    },
    followButton: {
      marginTop:10,
      height:35,
      width:"80%",
      padding:10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "violet",
      borderWidth:1,
      borderColor:"#dcdcdc",
  
      alignSelf:'center'
    },
    followButtonText:{
      color: "#dcdcdc",
      fontSize:12,
    },
  }); 
  
export default Card;
