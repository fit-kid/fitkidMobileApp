import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const SplashScreen = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={() => {
        navigation.replace('Login');
      }}>
      <Text>SplashScreen</Text>
    </TouchableOpacity>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
