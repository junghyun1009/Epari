import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Home,
  AiCapture,
  AiResult,
  HerbBook,
  HerbDetail,
  Login,
  UserPage,
} from '../screens';
import AiRegister from '../screens/AiRegister';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParamList} from '../types';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {Navigator, Screen} = createBottomTabNavigator<AppStackParamList>();
const Stack = createNativeStackNavigator<AppStackParamList>();

const Tab: React.FC = () => {
  return (
    <Navigator
      initialRouteName="HerbBook"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: styles.TabBarLabel,
        tabBarActiveTintColor: '#007C2B',
        tabBarInactiveTintColor: '#110105',
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="home" size={30} color="#007C2B" />
            ) : (
              <Ionicons name="home-outline" size={30} color="#110105" />
            ),
          title: 'EPARI',
        }}
      />
      <Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="person" size={30} color="#007C2B" />
            ) : (
              <Ionicons name="person-outline" size={30} color="#110105" />
            ),
          title: '로그인',
        }}
      />
      <Screen
        name="UserPage"
        component={UserPage}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="person-circle" size={30} color="#007C2B" />
            ) : (
              <Ionicons
                name="person-circle-outline"
                size={30}
                color="#110105"
              />
            ),
          title: '내 정보',
        }}
      />
      <Screen
        name="HerbBook"
        component={HerbBook}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="leaf" size={30} color="#007C2B" />
            ) : (
              <Ionicons name="leaf-outline" size={30} color="#110105" />
            ),
          title: '도감',
        }}
      />
    </Navigator>
  );
};

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={Tab} />
      <Stack.Screen name="AiCapture" component={AiCapture} />
      <Stack.Screen name="AiResult" component={AiResult} />
      <Stack.Screen name="AiRegister" component={AiRegister} />
      <Stack.Screen name="HerbDetail" component={HerbDetail} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="UserPage" component={UserPage} />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  HerbBookStackContatiner: {
    justifyContent: 'center',
  },

  TabBarLabel: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
});
export default AppStack;
