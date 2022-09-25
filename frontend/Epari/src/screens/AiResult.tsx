import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useRecoilValue} from 'recoil';
import AiCamera from '../components/AiCapture/AiCamera';
import EnrollImage from '../components/AiCapture/EnrollImage';
import {picturedImage, capturedImage} from '../store/classification';
import {useNavigation} from '@react-navigation/native';

const AiResult: React.FC = () => {
  const navigation = useNavigation();
  const picturedImageInfo = useRecoilValue(picturedImage);
  const capturedImageInfo = useRecoilValue(capturedImage);

  const picturedImageUrl = picturedImageInfo.uri;
  const capturedImageUrl = capturedImageInfo.detailPictureUrl;
  // const capturedPlantName = capturedImageInfo.plantName.split('_', 1);
  const capturedPlantName = capturedImageInfo.plantName;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: picturedImageUrl}} style={styles.image} />
        <Image source={{uri: capturedImageUrl}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.fontTest}>
          촬영한 사진이
          <Text style={styles.plantName}> {capturedPlantName}</Text>가 맞나요?
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <AiCamera style={styles.button} name={'다시 찍기'} />
        <Text
          style={styles.button}
          onPress={() => navigation.navigate('AiRegister')}>
          등록하기
        </Text>
      </View>
    </View>
  );
};

export default AiResult;

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
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  button: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: '#00845E',
    borderRadius: 8,
    margin: 8,
    fontFamily: 'NeoDGM-Regular',
  },
});
