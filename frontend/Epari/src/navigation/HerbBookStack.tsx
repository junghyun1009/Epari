import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {GetList, NoGetList, TotalList} from '../components/HerbBook/Lists';
import {HerbBookStackParamList} from '../types';

const Tab = createMaterialTopTabNavigator<HerbBookStackParamList>();

const HerbBookStack = () => {
  return (
    <View style={styles.HerbBookStackContatiner}>
      <Tab.Navigator
        initialRouteName="TotalList"
        screenOptions={{
          tabBarStyle: styles.TabBar,
          tabBarLabelStyle: styles.TabBarLabel,
          tabBarItemStyle: styles.TabBarItem,
          tabBarIndicatorStyle: styles.TabBarIndicator,
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#110105',
        }}>
        <Tab.Screen
          name="TotalList"
          component={TotalList}
          options={{title: '전체'}}
        />
        <Tab.Screen
          name="GetList"
          component={GetList}
          options={{title: '수집완료'}}
        />
        <Tab.Screen
          name="NoGetList"
          component={NoGetList}
          options={{title: '미수집'}}
        />
      </Tab.Navigator>
    </View>
  );
};

let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  HerbBookStackContatiner: {
    height: ScreenHeight * 0.7,
    justifyContent: 'center',
    backgroundColor: '#FFF7F2',
  },
  TabBar: {
    width: '72%',
    borderRadius: 90,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    borderWidth: 2.5,
    borderColor: '#110105',
    marginBottom: 6,
  },
  TabBarLabel: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  TabBarItem: {},
  TabBarIndicator: {
    backgroundColor: '#007C2B',
    height: '100%',
    borderRadius: 90,
  },
});
export default HerbBookStack;
