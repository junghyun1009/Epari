import React from 'react';
import {useRecoilValue} from 'recoil';
import AppStack from './AppStack';
import {View} from 'react-native';
import {loginState} from '../store/user';

const AuthStack: React.FC = () => {
  const isLogin = useRecoilValue(loginState);
  return <View>{isLogin ? <AppStack /> : null}</View>;
};

export default AuthStack;
