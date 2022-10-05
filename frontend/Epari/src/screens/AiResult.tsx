import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {
  picturedImage,
  capturedMainImage,
  resultPlant,
} from '../store/classification';
import {useNavigation} from '@react-navigation/native';
import AppText from '../components/AppText';

const AiResult: React.FC = () => {
  const navigation = useNavigation();
  const picturedImageState = useRecoilValue(picturedImage);
  const capturedMainImageState = useRecoilValue(capturedMainImage);
  const setResultPlantState = useSetRecoilState(resultPlant);

  const picturedImageUrl = picturedImageState.uri;
  const capturedMainImageUrl = capturedMainImageState.detailPictureUrl;
  const capturedMainPlantName = (capturedMainImageState.plantName || '').split(
    '_',
    1,
  );

  const setPlantState = () => {
    const plantState = {
      plantId: capturedMainImageState.plantId,
      plantName: capturedMainImageState.plantName,
    };
    setResultPlantState(plantState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: picturedImageUrl}} style={styles.image} />
        <Image source={{uri: capturedMainImageUrl}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <AppText style={styles.text}>
          <AppText style={styles.plantName}> {capturedMainPlantName}</AppText>
          (이)가 맞나요?
        </AppText>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, styles.cancelButton]}
          onPress={() => navigation.navigate('AiSpareResult')}>
          <AppText style={styles.buttonText}>아니오</AppText>
        </Pressable>
        <Pressable
          style={[styles.button, styles.rightButton]}
          onPress={() => {
            setPlantState();
            navigation.navigate('AiRegister');
          }}>
          <AppText style={styles.buttonText}>네</AppText>
        </Pressable>
      </View>
    </View>
  );
};

export default AiResult;

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF7F2',
  },
  imageContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  image: {
    width: ScreenWidth * 0.35,
    height: ScreenWidth * 0.35,
    borderWidth: 3,
    borderRadius: 12,
    borderColor: '#000',
    margin: ScreenWidth * 0.03,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: ScreenHeight * 0.03,
  },
  plantName: {
    color: '#00845E',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: ScreenWidth * 0.33,
    paddingVertical: ScreenHeight * 0.01,
    borderWidth: 5,
    borderRadius: 11,
    margin: ScreenWidth * 0.03,
  },
  cancelButton: {
    backgroundColor: '#D9D9D9',
    borderColor: '#D9D9D9',
  },
  rightButton: {
    backgroundColor: '#00845E',
    borderColor: '#00845E',
  },
  buttonText: {
    fontSize: ScreenHeight * 0.025,
    color: '#fff',
    // textShadowColor: '#99AEBB',
    textShadowColor: '#3A4A40',
    textShadowRadius: 2,
    textShadowOffset: {
      width: 1.8,
      height: 1.8,
    },
  },
});
