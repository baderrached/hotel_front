import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Extra, Home} from '../screens';
import {Account} from '../screens';
import {Reservation} from '../screens';
import {icons, COLORS} from '../constants';

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
};

const Tabs = () => (
  <Tab.Navigator
    tabBarOptions={tabOptions}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        const tintColor = focused ? COLORS.primary : COLORS.gray;
        switch (route.name) {
          case 'Home':
            return (
              <Image
                source={icons.home}
                resizeMode="contain"
                style={{tintColor: tintColor, height: 30, width: 40}}
              />
            );
          // case 'Search':
          //   return (
          //     <Image
          //       source={icons.search}
          //       resizeMode="contain"
          //       style={{tintColor: tintColor, height: 30, width: 30}}
          //     />
          //   );
          case 'Reservation':
            return (
              <Image
                source={icons.bookmark}
                resizeMode="contain"
                style={{tintColor: tintColor, height: 30, width: 40}}
              />
            );
          case 'Account':
            return (
              <Image
                source={icons.user}
                resizeMode="contain"
                style={{tintColor: tintColor, height: 30, width: 40}}
              />
            );
        }
      },
    })}>
    <Tab.Screen name="Home" component={Home} />
    {/* <Tab.Screen name="Search" component={Home} /> */}
    <Tab.Screen name="Reservation" component={Extra} />
    <Tab.Screen name="Account"  component={Account} />
  </Tab.Navigator>
);

export default Tabs;
