import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {AppStackParamList} from '../../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import TitleItem from './TitleItem';

import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

export type TotalListScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'TotalTitle'
>;

const TotalTitle: React.FC<TotalListScreenProps> = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    titleList();
  }, []);

  async function fetchToken() {
    const user = auth().currentUser;
    await user
      ?.getIdToken(true)
      .then(idToken => {
        AsyncStorage.removeItem('GoogleAccessToken');
        AsyncStorage.setItem('GoogleAccessToken', idToken);
      })
      .catch(error => console.log(error));
  }

  const titleList = async () => {
    await fetchToken();
    fetch('http://j7a201.p.ssafy.io/epari/v1/titles', {
      headers: {
        Authorization: AsyncStorage.getItem('GoogleAccessToken'),
      }
    })
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
