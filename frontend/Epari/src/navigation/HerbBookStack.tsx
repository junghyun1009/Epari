import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HerbList, FlowerList, TotalList} from '../components/HerbBook/Lists';

const Tab = createMaterialTopTabNavigator();

const HerbBookStack: React.FC = () => {
  return (
    <View style={styles.HerbBookStackContatiner}>
      <Tab.Navigator
        initialRouteName="전체"
        screenOptions={{
          tabBarStyle: styles.TabBar,
          tabBarLabelStyle: styles.TabBarLabel,
          tabBarItemStyle: styles.TabBarItem,
          tabBarIndicatorStyle: styles.TabBarIndicator,
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#110105',
        }}>
        <Tab.Screen name="전체" component={TotalList} />
        <Tab.Screen name="수집완료" component={HerbList} />
        <Tab.Screen name="미수집" component={FlowerList} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  HerbBookStackContatiner: {
    height: 600,
    justifyContent: 'center',
  },
  TabBar: {
    width: '72%',
    borderRadius: 90,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    borderWidth: 2.5,
    borderColor: '#110105',
  },
  TabBarLabel: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: 17,
  },
  TabBarItem: {},
  TabBarIndicator: {
    backgroundColor: '#007C2B',
    height: '100%',

    borderRadius: 90,
  },
});
export default HerbBookStack;
