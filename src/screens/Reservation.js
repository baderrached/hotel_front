import React, { Component } from 'react';
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
  SafeAreaView
} from 'react-native';
import { images } from '../constants';
import { rooms } from '../constants/data';


  const Reservation = ({navigation}) => {

  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList 
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={rooms}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} 
            onPress={() => navigation.navigate('Extra')}
            >
              <Image style={styles.image} source={item.img}/>
              <View style={styles.cardContent}>
                <Text style={styles.name}>Room number</Text>
                <Text style={styles.count}>Check in</Text>
               
              </View>
            </TouchableOpacity>
          )}}/>
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
    marginLeft:20,
    marginTop:10
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
