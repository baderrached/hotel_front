import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

import {COLORS, images, SIZES, FONTS, styles} from '../constants';

const Extra = ({navigation}) => (
  <SafeAreaView style={styles.container}>
 <Text>Extra screen </Text>
  </SafeAreaView>
);

export default Extra;
