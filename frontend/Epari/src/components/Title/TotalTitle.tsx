import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Dimensions, Pressable} from 'react-native';
import {AppStackParamList} from '../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import AppText from '../AppText';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {separateOperations} from 'graphql';

export type TotalListScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'TotalTitle'
>;

const TotalTitle: React.FC<TotalListScreenProps> = () => {
  const [titles, setTitles] = useState([]);
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [reptitle, setReptitle] = useState(0);

  useEffect(() => {
    getData();
  }, []);
  // useEffect(() => {
  //   getTitles();
  // }, [token]);

  async function fetchToken() {
    const user = auth().currentUser;
    await user
      ?.getIdToken(true)
      .then(idToken => {
        AsyncStorage.removeItem('GoogleAccessToken');
        AsyncStorage.setItem('GoogleAccessToken', idToken);
        console.log('idToken', idToken);
      })
      .catch(error => console.log(error));
  }

  const getData = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('GoogleAccessToken');
      if (storedToken !== null) {
        console.log('storedToken : ', storedToken);
        setToken(storedToken);
        getTitles(storedToken);
        const user = auth().currentUser;
        console.log('user', user);
        setUsername(user.email.substring(0, user.email.indexOf('@')));
      }
    } catch (e) {
      console.log(e);
    }
  };
  // getData();
  // console.log('토큰', token);

  // const titleList = async () => {
  //   await fetchToken();
  //   fetch('http://j7a201.p.ssafy.io/epari/v1/titles', {
  //     headers: {
  //       Authorization: AsyncStorage.getItem('GoogleAccessToken'),
  //     }
  //   })

  const getTitles = async storedToken => {
    // await fetchToken();
    // const token = await AsyncStorage.getItem('GoogleAcessToken')
    // token.then(response => console.log(response))
    console.log('제발', storedToken);
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: storedToken,
      },
    };
    fetch('http://j7a201.p.ssafy.io/epari/v1/titles/', requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log('토큰토큰', token)
        console.log('칭호', result);
        setTitles(result);
        result.map(each => {
          if (each.isRep) {
            setReptitle(each.titleId);
          }
        });
      });
  };

  // getTitles();
  console.log('titles', titles);

  const setRep = async titleId => {
    const rep = new FormData();
    rep.append('titleId', titleId);
    const requestPut = {
      method: 'PUT',
      body: rep,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token,
      },
    };
    fetch('http://j7a201.p.ssafy.io/epari/v1/titles/', requestPut)
      .then(response => response.json())
      .then(result => {
        // console.log('토큰토큰', token)
        console.log('칭호', result);
        setReptitle(titleId);
        getTitles(token);
      });
  };

  return (
    <View>
      <View style={styles.container}>
        {reptitle ? (
          <AppText style={styles.reptitle}>
            {titles[reptitle - 1].titleName}, {username}님!
          </AppText>
        ) : (
          <AppText></AppText>
        )}
        {titles.length ? (
          titles.map(title => (
            <View key={title.titleId} style={styles.Item}>
              <Image
                source={{uri: title.titlePictureUrl}}
                style={styles.ImageItem}
              />
              <View style={styles.Text}>
                <AppText style={styles.TitleItem}>{title.titleName}</AppText>
                <AppText style={styles.TextItem}>
                  {title.titleDescription}
                </AppText>
              </View>
              <Pressable>
                <View>
                  {title.isObtained ? (
                    title.isRep ? (
                      <AppText
                        style={styles.repButton}
                        onPress={() => {
                          setRep(title.titleId);
                        }}>
                        등록 중
                      </AppText>
                    ) : (
                      <AppText
                        style={styles.activeButton}
                        onPress={() => {
                          setRep(title.titleId);
                        }}>
                        등록하기
                      </AppText>
                    )
                  ) : (
                    <AppText style={styles.passiveButton}>미획득</AppText>
                  )}
                </View>
              </Pressable>
            </View>
          ))
        ) : (
          <AppText>아직 획득한 칭호가 없습니다.</AppText>
        )}
      </View>
    </View>
  );
};

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // flexWrap: 'wrap',
    // overflow: 'scroll',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF7F2',
  },
  reptitle: {
    marginVertical: ScreenHeight * 0.07,
    fontSize: 20,
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
    color: '#00845E',
  },
  TextItem: {
    width: ScreenWidth * 0.5,
  },
  repButton: {
    padding: ScreenWidth * 0.02,
    width: ScreenWidth * 0.17,
    backgroundColor: '#7567C3',
    borderRadius: 10,
    borderWidth: 2,
    textAlign: 'center',
    color: '#FFF7F2',
  },
  activeButton: {
    padding: ScreenWidth * 0.02,
    width: ScreenWidth * 0.17,
    backgroundColor: '#00845E',
    borderRadius: 10,
    borderWidth: 2,
    textAlign: 'center',
    color: '#FFF7F2',
  },
  passiveButton: {
    padding: ScreenWidth * 0.02,
    width: ScreenWidth * 0.17,
    backgroundColor: '#FFF7F2',
    borderRadius: 10,
    borderWidth: 2,
    textAlign: 'center',
    color: '#00845E',
  },
});

export default TotalTitle;
