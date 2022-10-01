import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {AppStackParamList} from '../../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import TitleItem from './TitleItem';

export type TotalListScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'TotalTitle'
>;

const TotalTitle: React.FC<TotalListScreenProps> = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    titleList();
  }, []);

  const titleList = () => {
    fetch('http://127.0.0.1:8000/epari/v1/titles')
      .then(response => response.json())
      .then(result => {
        let tmpTitleArray = [];
        result.map(item => {
          tmpTitleArray.push(item);
        });
        console.log(1, tmpTitleArray);
        setTitles(tmpTitleArray);
        console.log(2, titles);
      });
  };

  return (
    <View style={styles.container}>
      {titles.map(title => (
        <Text key={title.titleId.titleId}>{title}</Text>
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
