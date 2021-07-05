import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

import {COLORS, images, SIZES, FONTS, styles} from '../constants';

const Card = ({route,navigation}) => {
  
  
  return(
  <SafeAreaView style={styless.container}>
      <Text style={styless.title} > Submit your order please </Text>
   <ScrollView style={{backgroundColor:"#FFFFFF"}}>
        {/* <FlatList 
          style={styless.contentList}
          columnWrapperStyle={styless.listContainer}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return ( */}
            <TouchableOpacity style={styless.card} onPress={() => {this.clickEventListener(item)}}>
              <Image style={styless.image} source={{uri: 'https://french-iceberg.com/wp-content/uploads/2021/05/French-Taco-1200x675.jpg'}}/>
              <View style={styless.cardContent}>
                <Text style={styless.name}>Ftour </Text>
                <Text style={styless.count}>Descreption</Text>
                <TouchableOpacity style={styless.followButton}>
                <TextInput
        style={styless.followButtonText}
       
        value='2'
        placeholder="useless placeholder"
        keyboardType="numeric"
      /> 
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styless.card} onPress={() => {this.clickEventListener(item)}}>
            <Image style={styless.image} source={{uri: 'https://french-iceberg.com/wp-content/uploads/2021/05/French-Taco-1200x675.jpg'}}/>
              <View style={styless.cardContent}>
                <Text style={styless.name}>Ftour </Text>
                <Text style={styless.count}>Descreption</Text>
                <TouchableOpacity style={styless.followButton}>
                <TextInput
        style={styless.followButtonText}
       
        value='1'
        placeholder="useless placeholder"
        keyboardType="numeric"
      /> 
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
             
             
              <View style={{alignItems :'center' , paddingTop:15 }}> 
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
                <Text style={{color: COLORS.white, ...FONTS.h3}}>Order now</Text>
                </LinearGradient>
            </TouchableOpacity>
            </View>
          
          {/* }}/> */}
      </ScrollView>
  </SafeAreaView>

);}

const styless = StyleSheet.create({
    container:{
        flex: 2,
        backgroundColor: COLORS.white,
        marginTop:30,
    
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
      width:100,
      padding:10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "violet",
      borderWidth:1,
      borderColor:"#dcdcdc",
    },
    followButtonText:{
      color: "#dcdcdc",
      fontSize:12,
    },
  }); 
  
export default Card;
