import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import AiCamera from '../components/AiCapture/AiCamera';
import AiPhotos from '../components/AiCapture/AiPhotos';

const AiCapture: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <AiCamera
          name={'카메라'}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
        />
        <AiPhotos
          name={'갤러리'}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

export default AiCapture;

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#687798',
  },
  text: {
    textAlign: 'center',
    color: '#FFF7F2',
    fontSize: ScreenHeight * 0.025,
    textShadowColor: '#D9F9D9',
    textShadowRadius: 2,
    textShadowOffset: {
      width: 1.8,
      height: 1.8,
    },
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: ScreenHeight * 0.05,
  },
  button: {
    padding: ScreenWidth * 0.01,
    width: ScreenWidth * 0.4,

    borderWidth: 5,
    borderRadius: 11,
    borderColor: '#8AEE93',
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF7F2',
    textShadowColor: '#D9F9D9',
    textShadowRadius: 2,
    textShadowOffset: {
      width: 1.8,
      height: 1.8,
    },
    fontSize: ScreenHeight * 0.05,
  },
});
