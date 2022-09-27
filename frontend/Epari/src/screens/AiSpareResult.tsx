import React from 'react';
import {Image, StyleSheet, View, Text, ScrollView} from 'react-native';
import AiCamera from '../components/AiCapture/AiCamera';
import {useRecoilValue} from 'recoil';
import {capturedSubImage, picturedImage} from '../store/classification';

const AiSpareResult: React.FC = () => {
  const picturedImageState = useRecoilValue(picturedImage);
  const capturedSubImageState = useRecoilValue(capturedSubImage);

  const picturedImageUrl = picturedImageState.uri;
  const priorSubImageUrl = capturedSubImageState[0].detailPictureUrl;
  const secondarySubImageUrl = capturedSubImageState[1].detailPictureUrl;
  console.log(capturedSubImageState);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View>
          <Image source={{uri: picturedImageUrl}} style={styles.image} />
        </View>
        <ScrollView>
          <Image source={{uri: priorSubImageUrl}} style={styles.image} />
          <Text>{capturedSubImageState[0].plantName}</Text>
          <Image source={{uri: secondarySubImageUrl}} style={styles.image} />
          <Text>{capturedSubImageState[1].plantName}</Text>
        </ScrollView>
      </View>
      <AiCamera style={styles.button} name={'다시 찍기'} />
    </View>
  );
};

export default AiSpareResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    // flex: 2,
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
