import React from 'react';
import {View, StyleSheet} from 'react-native';
// import AiCapture from './AiCapture';
import {AppStackParamList} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Bottom, Header, SampleCollection} from '../components/Home';

export type HomeScreenProps = NativeStackScreenProps<AppStackParamList, 'Home'>;

// type GoogleSignInProps = {navigation: any};
const Home: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <SampleCollection />
      <Bottom navigation={navigation} />
    </View>
  );
};

// let ScreenWidth = Dimensions.get('window').width;
// let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#687798',
    // backgroundColor: 'rgb(184, 230, 225)',
  },
});

export default Home;
