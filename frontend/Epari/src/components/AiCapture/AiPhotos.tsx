import React from 'react';
import {Pressable} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSetRecoilState} from 'recoil';
import {
  picturedImage,
  capturedMainImage,
  capturedSubImage,
} from '../../store/classification';
import {useNavigation} from '@react-navigation/native';
import AppText from '../AppText';

const AiPhotos: React.FC = ({buttonStyle, textStyle, name}) => {
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
    // await fetch('http://127.0.0.1:8001/ai/plantAi', requestOptions)
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
    <Pressable style={buttonStyle}>
      <AppText
        style={textStyle}
        onPress={() => {
          uploadImage();
          navigation.navigate('AiResult');
        }}>
        {name}
      </AppText>
    </Pressable>
  );
};

export default AiPhotos;
