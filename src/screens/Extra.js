import React,{useState,useEffect,useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
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
  <TabView.Item style={{  width: '100%' }}>
  <View style={styless.container}>
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
                  <Text style={styless.followButtonText}>Add to card</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          
          {/* }}/> */}
      </View>
   
  </TabView.Item>
  <TabView.Item style={{  width: '100%' }}>
  <View style={styless.container}>
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
                  <Text style={styless.followButtonText}>Add to card</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          
          {/* }}/> */}
      </View>
   
  </TabView.Item>
  <TabView.Item style={{  width: '100%' }} >
  <View style={styless.container}>
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
                  <Text style={styless.followButtonText}>Add to card</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          
          {/* }}/> */}
      </View>
   
  </TabView.Item>
</TabView>
</SafeAreaView>
  )
}
  

const styless = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#ebf0f7"
  },
  contentList:{
    flex:1,
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

               

export default Extra;