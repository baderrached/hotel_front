import React,{useEffect,useState} from 'react';
import {View, Text, Image, TouchableOpacity,ScrollView} from 'react-native';
import {COLORS, SIZES, FONTS, styles, images, icons} from '../constants';
import {LinearGradient} from 'expo-linear-gradient';

const StarReview = ({rate}) => { 
  const stars = [];
  const fullStar = Math.floor(rate);
  const noStar = Math.floor(5 - rate);
  const halfStar = 5 - fullStar - noStar;

  // Full Star
  for (let i = 0; i < fullStar; i++) {
    stars.push(
      <Image
        key={`full-${i}`}
        source={icons.starFull}
        resizeMode="cover"
        style={{height: 20, width: 20}}
      />,
    );
  }

  // Half Star
  for (let i = 0; i < halfStar; i++) {
    stars.push(
      <Image
        key={`Half-${i}`}
        source={icons.starHalf}
        resizeMode="cover"
        style={{height: 20, width: 20}}
      />,
    );
  }

  // No Star 
  for (let i = 0; i < noStar; i++) {
    stars.push(
      <Image
        key={`Empty-${i}`}
        source={icons.starEmpty}
        resizeMode="cover"
        style={{height: 20, width: 20}}
      />,
    );
  }

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {stars}
      <Text
        style={{marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.body3}}>
        {rate}
      </Text>
    </View>
  );
};

const IconLabel = ({icon, label}) => (
  <View style={{alignItems: 'center'}}>
    <Image source={icon} resizeMode="cover" style={{width: 40, height: 40}} />
    <Text style={{marginTop: SIZES.base, color: COLORS.gray, ...FONTS.h3}}>
      {label}
    </Text>
  </View>
);

const DestinationDetail = ({route,navigation}) =>{ 
  const [room,setRoom]=useState([])
  useEffect(()=>{
     const data = route.params.room
     setRoom(data);
    console.log(data);
  
  },[])
  return(
  <View style={styles.container}>
    {/* header */}
    <View style={{flex: 2}}>
      <Image
        source={{uri:room.image}}
        resizeMode="cover"
        style={{height: '80%', width: '100%'}}
      />

      <View
        style={[
          {
            position: 'absolute',
            bottom: '5%',
            left: '5%',
            right: '5%',
            borderRadius: 15,
            padding: SIZES.padding,
            backgroundColor: COLORS.white,
          },
          styles.shadow,
        ]}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.shadow}>
            <Image
              source={{uri:room.image}}

              resizeMode="cover"
              style={{width: 70, height: 70, borderRadius: 15}}
            />
          </View>
          <View
            style={{
              marginHorizontal: SIZES.radius,
              justifyContent: 'space-around',
            }}>
            <Text style={{...FONTS.h3}}>{room.room_name}</Text>
            {/* <Text style={{color: COLORS.gray, ...FONTS.body3}}>France</Text> */}
            <StarReview rate={3.5} />
          </View>
        </View>

        <View style={{marginTop: SIZES.radius}}>
          <Text style={{color: COLORS.gray, ...FONTS.body3}}>
         {room.descreption}
          </Text>
        </View>
      </View>

      {/* Header Button */}
      <View
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          right: 20,
          flexDirection: 'row',
        }}>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={icons.back}
              resizeMode="cover"
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View>

      
      </View>
    </View>

    {/* body */}
    <ScrollView style={{flex: 1.8}}>
      {/* icons */}
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.base,
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding * 2,
        }}>
        <IconLabel icon={icons.villa} label="Villa" />
        <IconLabel icon={icons.parking} label="Parking" />
        <IconLabel icon={icons.wind} label="20 °C" />
      </View>

      {/* about */}
      <View
        style={{
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}>
        <Text style={{...FONTS.h2}}>About</Text>
        <Text
          style={{marginTop: SIZES.radius, color: COLORS.gray, ...FONTS.body3}}>
         {room.descreption}
        </Text>
      </View>
    </ScrollView>

    {/* footer */}
    <View style={{flex: 0.5, paddingHorizontal: SIZES.padding }}>
      <LinearGradient
        style={{height: 70, width: '100%', borderRadius: 15}}
        colors={['#edf0fc', '#d6dfff']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flex: 1,
              marginHorizontal: SIZES.padding,
              justifyContent: 'center',
            }}>
            <Text style={{...FONTS.h1}}>{room.price}$</Text>
          </View>
          <TouchableOpacity
            style={{
              width: 130,
              height: '80%',
              marginHorizontal: SIZES.radius,
            }}
            onPress={() => {


              navigation.navigate({
                name: 'Paiement',
                params: {  room:room },
            
              });
            }}>
            <LinearGradient
              style={[
                {
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                },
              ]}
              colors={['#46aeff', '#5884ff']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={{color: COLORS.white, ...FONTS.h2}}>BOOKING</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  </View>
);
}
export default DestinationDetail;
