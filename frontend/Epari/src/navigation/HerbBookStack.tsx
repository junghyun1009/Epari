import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {GetList, NoGetList, TotalList} from '../components/HerbBook/Lists';

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
          tabBarScrollEnabled: true,
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#110105',
        }}>
        <Tab.Screen name="전체" component={TotalList} />
        <Tab.Screen name="수집완료" component={GetList} />
        <Tab.Screen name="미수집" component={NoGetList} />
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
    fontSize: 18,
    width: 'auto',
    textAlign: 'center',
  },
  TabBarItem: {
    width: 114,
  },
  TabBarIndicator: {
    backgroundColor: '#007C2B',
    height: '100%',

    borderRadius: 90,
  },
});
export default HerbBookStack;
