import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Tab, TabView } from "react-native-elements";
import { COLORS, images, SIZES, FONTS, styles } from "../constants";
import { AppCont } from "./AppContext";
import InputSpinner from "react-native-input-spinner";

const Extra = () => {
  var [cart, setCart] = useContext(AppCont);
const Card=()=>(
  
            <View
              style={styless.card}
              onPress={() => {
                this.clickEventListener(item);
              }}
            >
              <Image
                style={styless.image}
                source={{
                  uri: "https://french-iceberg.com/wp-content/uploads/2021/05/French-Taco-1200x675.jpg",
                }}
              />
              <View style={{marginRight:30}}>
                <Text>ftour</Text>
                <Text>Description</Text>

                <View style={{ flexDirection: "column" }}>
                 
                  <TouchableOpacity style={styless.followButton}
                  
                  onPress={() =>{
console.log('pressed');
                  }
                    // setCart((cart)=> [
                    //   ...cart,
                    //   "India",
                    // ]);
                    // setCart(cart.push('aa'))
                }
                  >
                    <Text style={styless.followButtonText}>Add to card</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

           
)
  // const Tab = createMaterialTopTabNavigator();
  const [index, setIndexx] = useState(0);
  const data=[1,3,4,5,6]
  const setIndex = () => {
    // setIndexx(0)
    alert(index);
  };
  useEffect(() => {
    console.log(cart)
  }, [index,cart]);
  return (
    <SafeAreaView style={styles.container}>
      <Tab
        value={index}
        onChange={(e) => {
          setIndexx(e);
        }}
      >
        <Tab.Item
          type={"clear"}
          title="Cuisine w boissons"
          variant={"primary"}
          titleStyle={{ color: "black", fontSize: 12 }}
          buttonStyle={{ backgroundColor: "white" }}
        />
        <Tab.Item
          title="Gratuité"
          variant={"primary"}
          titleStyle={{ color: "black", fontSize: 12 }}
          buttonStyle={{ backgroundColor: "white" }}
        />
        <Tab.Item
          title="cart"
          variant={"primary"}
          titleStyle={{ color: "black", fontSize: 12 }}
          buttonStyle={{ backgroundColor: "white" }}
        />
      </Tab>

      <TabView value={index}>
        <TabView.Item style={{ width: "100%" }}>
<FlatList 
          data={data}
         
          renderItem={({item}) => {
          return (<Card/>)}}/>
          
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <View style={styless.container}>
         
          </View>
        </TabView.Item>
      </TabView>
    </SafeAreaView>
  );
};

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

    // marginLeft: 20,
    // marginRight: 30,
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
