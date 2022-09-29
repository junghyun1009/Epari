import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Member/Header';
import LoginForm from '../components/Member/LoginForm';
import {AppStackParamList} from '../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type LoginScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'Login'
>;
const Login: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <LoginForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
