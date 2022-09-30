import React from 'react';
import {View, StyleSheet} from 'react-native';
import TitleListHeader from '../components/Title/Header';
import TitleListStack from '../navigation/TitleListStack';

const TitleList: React.FC = () => {
  return (
    <View>
      <TitleListHeader />
      <TitleListStack />
    </View>
  );
};

export default TitleList;
