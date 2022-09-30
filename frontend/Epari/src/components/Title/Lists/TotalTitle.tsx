import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AppStackParamList} from '../../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import TitleItem from './TitleItem';

export type TotalListScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'TotalTitle'
>;

const TotalTitle: React.FC<TotalListScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      {imageList.map(item => (
        <TitleItem id={item} navigation={navigation} key={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    overflow: 'scroll',
    justifyContent: 'center',
    backgroundColor: '#FFF7F2',
  },
});

export default TotalTitle;

const imageList = [
  require('Epari/src/asset/activeIcons/active_0010.png'),
  require('Epari/src/asset/activeIcons/active_0020.png'),
];
