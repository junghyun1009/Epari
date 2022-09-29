import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useRecoilValue} from 'recoil';
import {useNavigation} from '@react-navigation/native';
import HerbBookHeader from '../components/HerbBook/Header';
import {ScrollView} from 'react-native-gesture-handler';

const CollectMap: React.FC = () => {

  return (
    <ScrollView style={styles.background}>
      <HerbBookHeader />
      <View style={styles.container}>
        <Text style={styles.fontTest}>Epari Herb Book Screen</Text>
      </View>
    </ScrollView>
  );
};

export default CollectMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 12,
    margin: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontTest: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: 16,
  },
  plantName: {
    color: '#00845E',
  },
  background: {
    backgroundColor: '#FFF7F2',
  },
});
