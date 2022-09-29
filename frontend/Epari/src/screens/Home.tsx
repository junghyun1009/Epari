import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AiCapture from './AiCapture';
import LogoImage from '../components/LogoImage';
import {AppStackParamList} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type HomeScreenProps = NativeStackScreenProps<AppStackParamList, 'Home'>;

// type GoogleSignInProps = {navigation: any};
const Home: React.FC<HomeScreenProps> = ({navigation}) => {
  async function movePageAI() {
    navigation.navigate('AiCapture');
  }
  async function movePageBook() {
    navigation.navigate('HerbBook');
  }
  return (
    <View style={styles.container}>
      <LogoImage />
      <AiCapture />
      <TouchableOpacity onPress={() => movePageAI()}>
        <Image
          style={styles.AI_Image}
          source={require('Epari/src/asset/icons/AI_Image.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => movePageBook()}>
        <Image
          style={styles.Book}
          source={require('Epari/src/asset/icons/Book.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log()}>
        <Image
          style={styles.question_mark}
          source={require('Epari/src/asset/icons/question_mark.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AI_Image: {
    top: ScreenHeight * 0.43,
    right: ScreenWidth * 0.38,
    width: ScreenWidth * 0.31,
    height: ScreenWidth * 0.31,
  },
  Book: {
    top: ScreenHeight * 0.27,
    left: ScreenWidth * 0.38,
    width: ScreenWidth * 0.31,
    height: ScreenWidth * 0.31,
  },
  question_mark: {
    top: ScreenHeight * 0.1,
    width: ScreenWidth * 0.2,
    height: ScreenWidth * 0.2,
  },
});

export default Home;
