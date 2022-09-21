import React from 'react';
import {Home, AiCapture, AiResult, IBook} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const {Navigator, Screen} = createBottomTabNavigator();

const AppStack: React.FC = () => {
  return (
    <Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
      <Screen name="home" component={Home} />
      <Screen name="aicapture" component={AiCapture} />
      <Screen name="aireulst" component={AiResult} />
      <Screen name="ibook" component={IBook} />
    </Navigator>
  );
};

export default AppStack;
