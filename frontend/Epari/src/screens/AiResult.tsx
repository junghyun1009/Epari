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
        <AppText style={styles.font}>
          촬영한 사진이
          <AppText style={styles.plantName}> {capturedMainPlantName}</AppText>가
          맞나요?
        </AppText>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, styles.cancelButton]}
          onPress={() => navigation.navigate('AiSpareResult')}>
          <AppText>아니오</AppText>
        </Pressable>
        <Pressable
          style={[styles.button, styles.rightButton]}
          onPress={() => {
            setPlantState();
            navigation.navigate('AiRegister');
          }}>
          <AppText style={styles.rightText}>네</AppText>
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
    borderRadius: 12,
    margin: ScreenWidth * 0.03,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    fontSize: ScreenHeight * 0.02,
  },
  plantName: {
    fontSize: ScreenHeight * 0.02,
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
    width: ScreenWidth * 0.3,
    paddingVertical: ScreenHeight * 0.02,
    borderRadius: 8,
    margin: ScreenWidth * 0.03,
    elevation: 1,
  },
  cancelButton: {
    backgroundColor: '#F6EDD9',
  },
  rightButton: {
    backgroundColor: '#00845E',
  },
  rightText: {
    color: '#fff',
  },
});
