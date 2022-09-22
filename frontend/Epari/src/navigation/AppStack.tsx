import React from 'react';
import {Home, AiCapture, AiResult, HerbBook} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const {Navigator, Screen} = createBottomTabNavigator();

const AppStack: React.FC = () => {
  return (
    <Navigator initialRouteName="HerbBook" screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="AiCapture" component={AiCapture} />
      <Screen name="AiReulst" component={AiResult} />
      <Screen name="HerbBook" component={HerbBook} />
    </Navigator>
  );
};

export default AppStack;
