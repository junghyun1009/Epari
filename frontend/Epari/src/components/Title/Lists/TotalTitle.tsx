import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import {AppStackParamList} from '../../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import AppText from '../../AppText';

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
          <View key={title.titleId.titleId} style={styles.Item}>
            <Image
              source={{uri: title.titleId.titlePictureUrl}}
              style={styles.ImageItem}
            />
            <View style={styles.Text}>
              <AppText style={styles.TitleItem}>
                {title.titleId.titleName}
              </AppText>
              <AppText style={styles.TextItem}>
                {title.titleId.titleDescription}
              </AppText>
            </View>
            <Pressable>
              <View>
                <AppText
                  style={styles.button}
                  onPress={() => {
                    saveImage();
                  }}>
                  등록하기
                </AppText>
              </View>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
};

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'scroll',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF7F2',
  },
  Item: {
    height: ScreenWidth * 0.23,
    width: ScreenWidth * 0.95,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: ScreenHeight * 0.015,
    marginHorizontal: ScreenWidth * 0.025,
    borderRadius: 12,
    borderWidth: 2.4,
    backgroundColor: '#CFDE8B',
  },
  ImageItem: {
    width: ScreenWidth * 0.16,
    height: ScreenWidth * 0.16,
    borderRadius: 12,
    borderWidth: 2.4,
    borderColor: 'black',
    backgroundColor: '#FFFFFF',
    marginLeft: ScreenWidth * 0.025,
  },
  Text: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: ScreenWidth * 0.025,
    justifyContent: 'center',
  },
  TitleItem: {
    fontSize: 18,
    marginBottom: ScreenHeight * 0.005,
  },
  TextItem: {
    width: ScreenWidth * 0.5,
  },
  button: {
    padding: ScreenWidth * 0.02,
    backgroundColor: '#00845E',
    borderRadius: 10,
    borderWidth: 2,
    textAlign: 'center',
  },
});

export default TotalTitle;
