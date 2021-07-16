import React ,{useState,useEffect}from 'react';
import {Image, TouchableOpacity,AsyncStorage} from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AppProvider } from "./src/screens/AppContext";

// screens
import {Onboarding, DestinationDetail , Register , Account , Paiement , Extra} from './src/screens';

// tabs
import Tabs from './src/navigation/tabs';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

import {COLORS, SIZES, icons} from './src/constants';
import Card from './src/screens/CardScreen';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Black': require('./src/assets/fonts/Roboto-Black.ttf'),
  });
  const [loggedIn,setloggedIn]=useState(false)
  const [loading,setLoading]=useState(true)
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        // We have data!!
        setloggedIn(true)
        setLoading(false)


      }
    } catch (error) {
      setLoading(false)

      // Error retrieving data
    }
  };
useEffect(()=>{
  _retrieveData()
},[])
  if (!fontsLoaded ) {
    return (<AppLoading/>);
  } else {
    return (
      <AppProvider>
      <NavigationContainer style={theme}>
        {
          loggedIn?(<Stack.Navigator initialRouteName="Home">
          {/* screen  */}
        
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              title: null,
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerLeft: null,
              headerRight: () => (
                <TouchableOpacity
                  style={{
                    marginRight: SIZES.padding,
                  }}
                  onPress={() => console.log('pressed!')}>
                  <Image
                    source={icons.barMenu}
                    resizeMode="contain"
                    style={{
                      height: 25,
                      width: 25,
                    }}
                  />
                </TouchableOpacity>
              ),
             headerShown: false
            }}
          />

        <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
        <Stack.Screen options={{headerShown:false}} name="Account" component={Account} />
        <Stack.Screen options={{headerShown:false}} name="Paiement" component={Paiement} />
        <Stack.Screen options={{headerShown:false}} name="Extra" component={Extra} />
        <Stack.Screen options={{headerShown:false}} name="Card" component={Card} />


          <Stack.Screen
            name="DestinationDetail"
            component={DestinationDetail}
            options={{headerShown: false}}
          />
          {/* tabs  */}
          <Stack.Screen
            name="Home"
            component={Tabs}
            
            options={{
              title: null,
              headerShown: false,
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerLeft: ({onPress}) => (
                <TouchableOpacity
                  style={{marginLeft: SIZES.padding}}
                  onPress={onPress}>
                  <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity
                  style={{marginRight: SIZES.padding}}
                  onPress={() => console.log('menu pressed.')}>
                  <Image
                    source={icons.menu}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                </TouchableOpacity>
              ),
            }}
          />

        </Stack.Navigator>):(
            <Stack.Navigator initialRouteName="Onboarding">
          {/* screen  */}
        
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              title: null,
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerLeft: null,
              headerRight: () => (
                <TouchableOpacity
                  style={{
                    marginRight: SIZES.padding,
                  }}
                  onPress={() => console.log('pressed!')}>
                  <Image
                    source={icons.barMenu}
                    resizeMode="contain"
                    style={{
                      height: 25,
                      width: 25,
                    }}
                  />
                </TouchableOpacity>
              ),
             headerShown: false
            }}
          />

        <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
        <Stack.Screen options={{headerShown:false}} name="Account" component={Account} />
        <Stack.Screen options={{headerShown:false}} name="Paiement" component={Paiement} />
        <Stack.Screen options={{headerShown:false}} name="Extra" component={Extra} />
        <Stack.Screen options={{headerShown:false}} name="Card" component={Card} />


          <Stack.Screen
            name="DestinationDetail"
            component={DestinationDetail}
            options={{headerShown: false}}
          />
          {/* tabs  */}
          <Stack.Screen
            name="Home"
            component={Tabs}
            
            options={{
              title: null,
              headerShown: false,
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerLeft: ({onPress}) => (
                <TouchableOpacity
                  style={{marginLeft: SIZES.padding}}
                  onPress={onPress}>
                  <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity
                  style={{marginRight: SIZES.padding}}
                  onPress={() => console.log('menu pressed.')}>
                  <Image
                    source={icons.menu}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                </TouchableOpacity>
              ),
            }}
          />

        </Stack.Navigator>
          )
        }
        
      </NavigationContainer>
      </AppProvider>
    );
  }
}
