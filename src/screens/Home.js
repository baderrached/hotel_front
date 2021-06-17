import React , {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
  Picker
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {
  COLORS,
  SIZES,
  FONTS,
  images,
  optionItems,
  destinations,
  styles,
} from '../constants';
import { rooms } from '../constants/data';


const Home = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("Sousse");
    const [selectedValue2, setSelectedValue2] = useState("1 Adulte");

  

 

  const renderDestination = ({item, index}) => {
    const destinationStyle = index === 0 ? {marginLeft: SIZES.padding} : {};
    return (
      <TouchableOpacity
        style={{
       
          marginHorizontal: SIZES.base,
          ...destinationStyle,
        }}
       >
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width: SIZES.width * 0.42,
            height: SIZES.height * 0.25,
            borderRadius: 15,
          }}
        />
        
      </TouchableOpacity>
    );
  };


  const renderRoom = ({item, index}) => {
    const destinationStyle = index === 0 ? {marginLeft: SIZES.padding} : {};

    return (
      <TouchableOpacity
      style={{
        marginHorizontal: SIZES.base,
        paddingLeft : 10,
        paddingBottom : 10
      }}
      onPress={() => {
        navigation.navigate('DestinationDetail');
        
      }}
       >
        <Image
          source={item.img}
          resizeMode="cover"
          style={{width: 150, height:120, borderRadius: 10}}
        />
        
      </TouchableOpacity>
    );
  };




  return (
    <SafeAreaView style={styles.container}>
    
       {/* Filtre */}
       <View style={{flex: 0.2 }}>
          <View style={{flex: 1 ,flexDirection:'row'  }}>

            <Text
            style={{
              marginTop: SIZES.padding,
              paddingHorizontal: SIZES.padding,
              ...FONTS.h3,
            }}>
          Destination
            </Text>

            <Text
            style={{
              marginTop: SIZES.padding,
              paddingHorizontal: SIZES.padding,
              ...FONTS.h3,
            }}>
            type Du chambre
            </Text>
            </View>
          <View style={{flex: 1,flexDirection:'row' , justifyContent:'flex-start', fontSize:17 , paddingLeft:17}}>

          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 130 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Sousse" value="sousse" />
            <Picker.Item label="Madrid" value="madrid" />
          </Picker>
          
        
          

          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="1 Adulte" value="1 adulte" />
            <Picker.Item label="2 Adultes" value="2 adulte" />
          </Picker>
            </View>

      </View>

  <ScrollView style={{flex:0.5}}>
        {/* Banner */}
   <View>
   <Text
          style={{
            marginTop: 5,
            marginBottom: 15,
            paddingHorizontal: SIZES.padding,
            ...FONTS.h3,
         
          }}>
          Our Hotel
        </Text>
       <FlatList
        horizontal
          showsHorizontalScrollIndicator={false}
          data={destinations}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item, index) => renderDestination(item, index)}
        />
        <Text
          style={{
            marginTop: 10,
            marginBottom: 5,

            paddingHorizontal: SIZES.padding,
            ...FONTS.h3,
         
          }}>
          Room
        </Text>

        <FlatList
           columnWrapperStyle={{justifyContent: 'space-around'}}
           numColumns={2}
          showsHorizontalScrollIndicator={false}
          data={rooms}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item, index) => renderRoom(item, index)}
        />

          
          </View>
      </ScrollView>

     
    </SafeAreaView>
  );
};

export default Home;
