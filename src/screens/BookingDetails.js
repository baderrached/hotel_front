import React,{useEffect,useState} from 'react';
import {View, Text, Image, TouchableOpacity,ScrollView} from 'react-native';
import {COLORS, SIZES, FONTS, styles, images, icons} from '../constants';
import DateRangePicker from "react-native-daterange-picker";
import moment from "moment";
const BookingDetails=()=>{
    const [startDate,setStartDate]=useState("")
    const [endDate,setEndDate]=useState("")
    const [open,setopen]=useState(false)

    const [displayedDate,setDisplayedDate]=useState(moment())
const setDates=(dates)=>{
    if(dates.startDate){
        setStartDate(dates.startDate)
    }
    if(dates.endDate){
        setEndDate(dates.endDate)
    }
   
}
    return(
  <View style={styles.container}>
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
    
      <DateRangePicker
          onChange={setDates}
          endDate={endDate}
          startDate={startDate}
          displayedDate={displayedDate}
          range
          open={open}
        >
            <Text onPress={() =>setopen(!open)}>Click me!</Text>
        </DateRangePicker>
      </View>
    )
}
export default BookingDetails;