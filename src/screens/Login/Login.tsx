import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Login = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.loginBtn}
      onPress={() => {
        navigation.navigate('Main');
      }}>
      <Text>Login</Text>
    </TouchableOpacity>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
