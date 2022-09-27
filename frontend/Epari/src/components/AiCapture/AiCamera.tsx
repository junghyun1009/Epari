import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSetRecoilState} from 'recoil';
import {
  picturedImage,
  capturedMainImage,
  capturedSubImage,
} from '../../store/classification';
import {useNavigation} from '@react-navigation/native';

const AiCamera: React.FC = ({style, name}) => {
  const navigation = useNavigation();
  const setPicturedImage = useSetRecoilState(picturedImage);
  const setCapturedMainImage = useSetRecoilState(capturedMainImage);
  const setCapturedSubImage = useSetRecoilState(capturedSubImage);
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
        setPicturedImage(image);
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
    await fetch('http://127.0.0.1:8001/ai/plantAi', requestOptions)
      .then(response => response.json())
      .then(result => {
        const mainInfo = result.slice(0, 1);
        const subInfo = result.slice(1);
        setCapturedMainImage(...mainInfo);
        setCapturedSubImage(...subInfo);
      })
      .catch(error => console.log('error', error));
  };

  return (
    <Pressable style={style}>
      <View style={styles.textContainer}>
        <Text
          style={styles.text}
          onPress={() => {
            uploadImage();
            navigation.navigate('AiResult');
          }}>
          {name}
        </Text>
      </View>
    </Pressable>
  );
};

export default AiCamera;

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'NeoDGM-Regular',
    // fontSize: 32,
    // color: 'white',
  },
});
