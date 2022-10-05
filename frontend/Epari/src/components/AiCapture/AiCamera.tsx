import React from 'react';
import {Pressable} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {useSetRecoilState} from 'recoil';
import {
  picturedImage,
  capturedMainImage,
  capturedSubImage,
} from '../../store/classification';
import {useNavigation} from '@react-navigation/native';
import AppText from '../AppText';

const AiCamera: React.FC = ({buttonStyle, textStyle, name}) => {
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
    await launchCamera({}, res => {
      if (res.didCancel) {
        navigation.navigate('AiCapture');
      } else if (res.errorCode) {
        console.log('ImagePicker Error', res.errorCode);
      } else if (res.assets) {
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
      headers: {},
    };
    await fetch('http://j7a201.p.ssafy.io/ai/plantAi', requestOptions)
      .then(response => response.json())
      .then(result => {
        const mainInfo = result.slice(0, 1);
        const subInfo = result.slice(1);
        setCapturedMainImage(...mainInfo);
        setCapturedSubImage(subInfo);
      })
      .catch(error => console.log('error', error));
  };

  return (
    <Pressable
      style={buttonStyle}
      onPress={() => {
        uploadImage();
        navigation.navigate('AiResult');
      }}>
      <AppText style={textStyle}>{name}</AppText>
    </Pressable>
  );
};

export default AiCamera;
