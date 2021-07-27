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
  ToastAndroid,
  AsyncStorage
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import {LinearGradient} from 'expo-linear-gradient';
import { AppCont } from "./AppContext";
import axios from 'axios'
import {COLORS, images, SIZES, FONTS, styles} from '../constants';
import AwesomeAlert from 'react-native-awesome-alerts';

const Spa = ({route,navigation}) => {
const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
const [selected,setSelectedValue]=useState(null);
const Card=(item,visible)=>{
  const showDatePicket = (id) => {
    setSelectedValue(id);
    setDatePickerVisibility(true);
  };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = async (date) => {
      let d=new Date(date).toLocaleDateString()
      let t=new Date(date).toLocaleTimeString()
      let user=await AsyncStorage.getItem('user')
        user=JSON.parse(user);
      
      axios.post(`http://192.168.1.12:3000/spa_restau`,{
        "user_id":user.id,
        "day":d,
        "time":t
      }).then(res=>{
        setAlert(true)
      })
      hideDatePicker();
    };
  return (
    
      <View
        style={styless.card}
        onPress={() => {
         this.clickEventListener(item);
        }}
      >
             <AwesomeAlert
          show={alert}
          showProgress={false}
          message="Reservation done"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={false}
        
        />
        <Image
          style={styless.image}
          source={{
            uri: item.image,
          }}
        />
        <View style={{marginRight:30}}>
          <Text style={{alignSelf:'center',fontSize:20}}>{item.name}</Text>
          {/* <Text>pick date</Text>
          <Text>pick time</Text> */}
  
  <DateTimePickerModal
          isVisible={visible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
          <View style={{ flexDirection: "column" }}>
           
            <TouchableOpacity style={styless.followButton}
            onPress={() =>showDatePicket(item.id)}
          
            >
              <View>
              <Text style={styless.followButtonText}>Reserve</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  
     
  )}
const [spa,setSpa]=useState([])
  const get_spa=async()=>{
      const data=await axios.get('http://192.168.1.12:3000/spa_restau')
    setSpa(data.data)
  }
  
  useEffect((
    
  )=>{
      get_spa()
  },[])
  const [alert,setAlert]=useState(false)
  return(
  <View style={styless.container}>
       <FlatList 
  data={spa}
 
  renderItem={({item}) => (Card(item,isDatePickerVisible)
  )}
/>
  </View>

);}
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
// const styless = StyleSheet.create({
//     container:{
//         flex: 2,
//         backgroundColor: COLORS.white,
        
    
//     },
//     contentList:{
//       flex:1,
//     },
//     title:{
//         fontSize:25,
//         paddingTop:20,
//         alignSelf:'center',
//         color:"black",

//     },
//     cardContent: {
//       marginLeft:20,
   
//     },
//     image: {
//         width: '50%',
//         height: '100%',
//         borderRadius: 20,
//         borderWidth: 2,
//         borderColor: "#ebf0f7",
//         marginRight:10,
//         position: 'absolute',
//         left:5
//       },  card: {
//         display:'flex',
//         position: 'relative',
//         width:'100%',
//         shadowColor: "#00000021",
//         shadowOffset: {
//           width: 0,
//           height: 6,
//         },
//         marginTop:5,
//         marginBottom:5,
//         shadowOpacity: 0.37,
//         shadowRadius: 7.49,
//         elevation: 12,
    
//         marginLeft: 2 ,// marginRight: 30,
//         backgroundColor: "white",
//         padding: 10,
//         flexDirection: "row",
//         borderRadius: 30,
//         height: 140,
//         justifyContent: "flex-end",
//         alignItems: "center",
//         alignSelf:'flex-end'
//       },
  
//     name:{
//       fontSize:18,
//       flex:1,
//       alignSelf:'flex-start',
//       color:"black",
//       fontWeight:'bold'
//     },
//     count:{
//       fontSize:12,
//       flex:1,
//       alignSelf:'flex-start',
//       color:"grey",
       
//     },
//     followButton: {
//       marginTop:10,
//       height:35,
//       width:"80%",
//       padding:10,
//       flexDirection: 'row',
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius:30,
//       backgroundColor: "violet",
//       borderWidth:1,
//       borderColor:"#dcdcdc",
  
//       alignSelf:'center'
//     },
//     followButtonText:{
//       color: "#dcdcdc",
//       fontSize:12,
//     },
//   }); 
  
export default Spa;
