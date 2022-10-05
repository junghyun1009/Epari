import React from 'react';
import {View} from 'react-native';
import TitleListHeader from '../components/Title/Header';
// import TitleListStack from '../navigation/TitleListStack';
import TotalTitle from '../components/Title/TotalTitle';

const TitleList: React.FC = () => {
  return (
    <View>
      <TitleListHeader />
      <TotalTitle />
    </View>
  );
};

export default TitleList;
