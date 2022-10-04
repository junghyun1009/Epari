import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, GoogleSignIn, MiddleIcons} from '../components/Member';
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
      <MiddleIcons />
      <GoogleSignIn navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#110105',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
