import React from 'react';
import {View, StyleSheet} from 'react-native';
import MemberHeader from '../components/Member/Header';
import LoginForm from '../components/Member/LoginForm';

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <MemberHeader />
      <LoginForm />
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
  // cameraButton: {
  //   borderWidth: 1,
  //   borderRadius: 12,
  //   width: 300,
  //   height: 300,
  // },
  // fontTest: {
  //   fontFamily: 'NeoDGM-Regular',
  // },
});

export default Login;
