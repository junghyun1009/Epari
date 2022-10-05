import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppStackParamList} from '../types';
import {
  HerbCollectionList,
  HerbDetailHeader,
  HerbInfo,
} from '../components/HerbDetail';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type DetailScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'HerbDetail'
>;

const HerbDetail: React.FC<DetailScreenProps> = ({
  route,
  navigation,
}: DetailScreenProps) => {
  const id = route.params.id;
  const description = route.params.description;
  const detailPictureUrl = route.params.detailPictureUrl;
  const plantName = route.params.plantName;
  const [collectionList, setCollectionList] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('GoogleAccessToken');
        if (storedToken !== null) {
          const requestOptions = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: storedToken,
            },
          };
          const url = `http://j7a201.p.ssafy.io/epari/v1/collection/`;
          let pathURL = `${url}${id}`;
          console.log(pathURL);
          await fetch(pathURL, requestOptions)
            .then(response => {
              console.log(response.json().then(res => setCollectionList(res)));
            })

            .catch(error => console.log(error));
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [id]);

  return (
    <View style={styles.background}>
      <HerbDetailHeader navigation={navigation} />
      <HerbInfo
        plantName={plantName}
        description={description}
        detailPictureUrl={detailPictureUrl}
      />
      <HerbCollectionList collection={collectionList} />
      <View style={styles.container}>
        <Text style={styles.fontTest}>Epari Herb Detail Screenn</Text>
        {id === undefined ? null : <Text>id:{id}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFF7F2',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  fontTest: {
    fontFamily: 'NeoDGM-Regular',
  },
});
export default HerbDetail;
