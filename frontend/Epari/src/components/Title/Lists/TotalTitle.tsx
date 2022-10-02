import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
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
        console.log(0, result);
        // let tmpTitleArray = [];
        // result.map(item => {
        //   tmpTitleArray.push(item);
        // });
        // console.log(1, tmpTitleArray);
        setTitles(result);
        console.log(2, titles);
      });
  };

  return (
    <View>
      <View style={styles.container}>
        {titles.map(title => (
          <View key={title.titleId.titleId}>
            <Image
              source={{uri: title.titleId.titlePictureUrl}}
              style={styles.ImageItem}
            />
            <Text>{title.titleId.titleName}</Text>
            <Text>{title.titleId.titleDescription}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

let ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    overflow: 'scroll',
    justifyContent: 'center',
    backgroundColor: '#FFF7F2',
  },
  ImageItem: {
    width: ScreenWidth * 0.13,
    height: ScreenWidth * 0.13,
  },
});

export default TotalTitle;
