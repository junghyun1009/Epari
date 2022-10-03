import {useNavigation} from '@react-navigation/native';
import React, {isValidElement, useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Keyboard,
} from 'react-native';
import {useRecoilValue} from 'recoil';
import {
  areaCode,
  picturedImage,
  resultPlant,
  sigunguCode,
} from '../../store/classification';
import axios from 'axios';
import AppText from '../AppText';
import LocationSelector from './LocationSelector';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EnrollForm: React.FC = ({}) => {
  const navigation = useNavigation();
  const picturedImageState = useRecoilValue(picturedImage);
  const resultPlantState = useRecoilValue(resultPlant);
  const areaCodeState = useRecoilValue(areaCode);
  const sigunguCodeState = useRecoilValue(sigunguCode);

  const [inputs, setInputs] = useState({
    // place: '',
    title: {value: '', isValid: true},
    content: {value: '', isValid: true},
  });

  const [token, setToken] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const inputChangedHandler = (
    inputIdentifier: string,
    enteredValue: string,
  ) => {
    setInputs(curInputs => {
      return {
        ...curInputs,
        [inputIdentifier]: {value: enteredValue, isValid: false},
      };
    });
  };

  const getData = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('GoogleAccessToken');
      if (storedToken !== null) {
        console.log('storedToken : ', storedToken);
        setToken(storedToken);
      }
    } catch (e) {
      console.log(e);
    }
  };
  console.log('token', token);

  // async function postToken(idToken: any) {
  //   console.log('123:', idToken);
  //   axios
  //     // .post('http://10.0.2.2:8000/epari/v1/accounts/login', {}, {
  //     .post(
  //       'http://j7a201.p.ssafy.io/epari/v1/collection/',
  //       {},
  //       {
  //         headers: {
  //           Authorization: idToken,
  //         },
  //       },
  //     )
  //     .then(function (response) {
  //       console.log('456:', response);
  //     })
  //     .catch(error => {
  //       console.log('error : ', error.message);
  //     });
  // }

  const saveImage = async () => {
    const image = {
      uri: '',
      type: '',
      name: '',
    };
    image.uri = picturedImageState.uri;
    image.name = picturedImageState.name;
    image.type = picturedImageState.type;

    const formdata = new FormData();
    formdata.append('plantId', resultPlantState.plantId);
    // formdata.append('userId', token);
    formdata.append('collectPictureUrl', image);
    formdata.append('areaId', areaCodeState);
    formdata.append('sigunguId', sigunguCodeState);
    // formdata.append('collectPlace', inputs.place);
    formdata.append('collectPlace', '1');
    formdata.append('collectTitle', inputs.title.value);
    formdata.append('collectContent', inputs.content.value);

    const requestOptions = {
      method: 'POST',
      body: formdata,
      headers: {
        // 'Content-Type': 'multipart/form-data',
        Authorization: token,
      },
    };
    // await fetch('http://127.0.0.1:8000/epari/v1/collection/', requestOptions)
    await fetch('http://j7a201.p.ssafy.io/epari/v1/collection/', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log('result-', result);
        console.log('formdata-', formdata);
      })
      .catch(error => console.log('error', error));

    const titleIsValid = inputs.title.value.trim().length > 0;
    const contentIsValid = inputs.content.value.trim().length > 0;
    if (!titleIsValid) {
      setInputs(curInputs => {
        return {
          title: {value: curInputs.title.value, isValid: titleIsValid},
          content: {value: curInputs.content.value, isValid: contentIsValid},
        };
      });
      return;
    }
    navigation.navigate('HerbDetail', {id: resultPlantState.plantId});
  };

  const plantName = (resultPlantState.plantName || '').split('_', 1);

  const formIsInvalid = !inputs.title.isValid || !inputs.content.isValid;

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={-170}
      style={styles.container}>
      <ScrollView>
        <View style={styles.plantInfo}>
          <Image
            source={{uri: picturedImageState.uri}}
            style={styles.plantImage}
          />
          <Text style={styles.plantName}>{plantName}</Text>
        </View>
        <LocationSelector />
        {/* <View style={styles.inputConatiner}>
          <Text style={styles.inputLabel}>상세 지역: </Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={inputChangedHandler.bind(this, 'place')}
            value={inputs.place}
            maxLength={50}
          />
        </View> */}
        <View style={styles.inputConatiner}>
          <Text style={styles.inputLabel}>제목: </Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={inputChangedHandler.bind(this, 'title')}
            value={inputs.title.value}
            maxLength={100}
          />
        </View>
        <View style={styles.inputConatiner}>
          <Text style={styles.inputLabel}>내용: </Text>
          <TextInput
            style={[styles.inputBox, styles.multilineInputBox]}
            onChangeText={inputChangedHandler.bind(this, 'content')}
            value={inputs.content.value}
            multiline
          />
          {formIsInvalid && (
            <AppText style={styles.errorText}>빠짐없이 입력해주세요</AppText>
          )}
        </View>
      </ScrollView>
      <Pressable>
        <View>
          <Text
            style={styles.button}
            onPress={() => {
              saveImage();
              Keyboard.dismiss();
            }}>
            등록하기
          </Text>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default EnrollForm;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  plantInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  plantImage: {
    width: 250,
    height: 250,
    borderRadius: 12,
    margin: 24,
  },
  plantName: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: 20,
  },
  inputConatiner: {
    marginVertical: 6,
  },
  inputLabel: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'NeoDGM-Regular',
    marginVertical: 6,
  },
  inputBox: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#F6EDD9',
    fontFamily: 'NeoDGM-Regular',
  },
  multilineInputBox: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  errorText: {
    marginVertical: 12,
    color: '#99AEBB',
    textAlign: 'center',
    fontSize: 12,
  },
  button: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#00845E',
    borderRadius: 8,
    margin: 8,
    fontFamily: 'NeoDGM-Regular',
  },
});
