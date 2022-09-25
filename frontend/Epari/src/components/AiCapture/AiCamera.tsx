import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSetRecoilState, useRecoilValue} from 'recoil';
import {capturedImage, picturedImage} from '../../store/classification';
import {useNavigation} from '@react-navigation/native';

const AiCamera: React.FC = ({}) => {
  const navigation = useNavigation();
  const setPicturedImageUrl = useSetRecoilState(picturedImage);
  const setCapturedImage = useSetRecoilState(capturedImage);

  const uploadImage = async () => {
    const image = {
      uri: '',
      type: '',
      name: '',
    };
    await launchImageLibrary({}, res => {
      if (res.didCancel) {
        console.log('User Cancelled image picker');
      } else if (res.errorCode) {
        console.log('ImagePicker Error', res.errorCode);
      } else if (res.assets) {
        console.log('ImagePicker data', res.assets);
        image.type = res.assets[0].type;
        image.uri = res.assets[0].uri;
        image.name = res.assets[0].fileName;
        setPicturedImageUrl(image.uri);
      }
    });
    const formdata = new FormData();
    formdata.append('capturedImg', image);

    const requestOptions = {
      method: 'POST',
      body: formdata,
      headers: {
        // 'Content-Type': 'multipart/form-data; ',
      },
    };
    await fetch('http://127.0.0.1:8001/epari/v1/plantAi', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log('result', result);
        setCapturedImage(result);
      })
      .catch(error => console.log('error', error));
  };

  return (
    <View style={styles.container}>
      <Pressable>
        <View>
          <Text
            style={styles.fontTest}
            onPress={() => {
              uploadImage();
              navigation.navigate('AiResult');
            }}>
            CAMERA
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontTest: {
    fontFamily: 'NeoDGM-Regular',
  },
});

export default AiCamera;
