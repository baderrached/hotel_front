import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  AsyncStorage
} from "react-native";
import { Badge, Icon, withBadge ,Header,BadgedIcon} from 'react-native-elements'
import CardScreen from './CardScreen'
import { LinearGradient } from "expo-linear-gradient";
import { Tab, TabView } from "react-native-elements";
import { COLORS, images, SIZES, FONTS, styles } from "../constants";
import { AppCont } from "./AppContext";
import InputSpinner from "react-native-input-spinner";
import axios from "axios";
import Spa from "./Spa";

const Extra = ({route,navigation}) => {
  var [cart, setCart] = useContext(AppCont);
const Card=(item)=>(
  
            <View
              style={styless.card}
              onPress={() => {
               this.clickEventListener(item);
              }}
            >
              <Image
                style={styless.image}
                source={{
                  uri: item.image,
                }}
              />
              <View style={{marginRight:30}}>
                <Text>{item.name}</Text>
                <Text>{item.descreption}</Text>

                <View style={{ flexDirection: "column" }}>
                 
                  <TouchableOpacity style={styless.followButton}
                  
                  onPress={() =>{

                  
                    setCart([...cart,item])
                }}
                  >
                    <View>
                    <Text style={styless.followButtonText}>Add to card</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

           
)
  // const Tab = createMaterialTopTabNavigator();
  const [index, setIndexx] = useState(0);
  const [data,setData]=useState([])
  const [user,setUser]=useState([])
  const [room,setRoom]=useState([])
  const getExtra=async()=>{
axios.get('http://192.168.1.12:3000/extra').then((Response)=>{
  setData(Response.data)
})
  }


  useEffect(() => {
    getExtra()
    console.log(cart);
  }, []);
  const BadgedIcon = withBadge(cart.length)(Icon);


 return(
    <View style={styles.container}>
     
      <Tab
        value={index}
        disableIndicator
        onChange={(e) => {
          setIndexx(e);
        }}
      >
        <Tab.Item
          type={"clear"}
          title="Cuisine et boissons"
          variant={"primary"}
          titleStyle={{ color: "black", fontSize: 8 }}
          buttonStyle={{ backgroundColor: "white" }}
        />
        <Tab.Item
          title="Gratuité"
          variant={"primary"}
          titleStyle={{ color: "black", fontSize: 8 }}
          buttonStyle={{ backgroundColor: "white" }}
        />
         <Tab.Item
          title="Spa et restaurant"
          variant={"primary"}
          titleStyle={{ color: "black", fontSize: 8 }}
          buttonStyle={{ backgroundColor: "white" }}
        />
        {/* <Tab.Item
          title={<>
        <BadgedIcon type="Entypo" name="shopping-cart"/>
       
  </>
          }
          variant={"primary"}
          titleStyle={{ color: "black", fontSize: 12 }}
          buttonStyle={{ backgroundColor: "white" }}
        /> */}
      </Tab>

 {
   index==0&& (
     <>
    <FlatList 
    data={data}
   
    renderItem={({item}) => {
      if(item.price!="0")return Card(item)
      
  
    
  }
  
  }/>
      <TouchableOpacity 
      onPress={() => {
        navigation.navigate("Card")
        // console.log('aa');
      }}
      style={{backgroundColor:"violet",justifyContent:'center',alignItems:'center',position:'absolute',height:80,width:80,borderRadius:90,right:10,bottom:10}}>
      <BadgedIcon type="Entypo" name="shopping-cart"
      />
      </TouchableOpacity>
      </>
      )
 }
 {
index==1 && (
  <>
  <FlatList 
  data={data}
 
  renderItem={({item}) => {if(item.price=="0")return Card(item)
}
    }/>
    <TouchableOpacity 
      onPress={() => {
        navigation.navigate("Card")
        // console.log('aa');
      }}
      style={{backgroundColor:"violet",justifyContent:'center',alignItems:'center',position:'absolute',height:80,width:80,borderRadius:90,right:10,bottom:10}}>
      <BadgedIcon type="Entypo" name="shopping-cart"
      />
      </TouchableOpacity>
    </>
 )
 }
 {
index==2 && (
  <Spa/>
 )
 }
    </View>
  )

}
;


const styless = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#ebf0f7",
    height: "100%",
  },
  contentList: {
    flex: 1,
  },

  image: {
    width: '50%',
    height: '100%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#ebf0f7",
    marginRight:10,
    position: 'absolute',
    left:5
  },

  card: {
    display:'flex',
    position: 'relative',
    width:'100%',
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    marginTop:5,
    marginBottom:5,
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 2 ,// marginRight: 30,
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    borderRadius: 30,
    height: 140,
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf:'flex-end'
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: "flex-start",
    color: "black",
    fontWeight: "bold",
    marginBottom: 10,
  },
  count: {
    fontSize: 12,
    flex: 1,
    alignSelf: "flex-start",
    color: "grey",
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    // padding:10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "violet",
    borderWidth: 1,
    borderColor: "#dcdcdc",
  },
  followButtonText: {
    color: "#dcdcdc",
    fontSize: 12,
  },
});

export default Extra;
