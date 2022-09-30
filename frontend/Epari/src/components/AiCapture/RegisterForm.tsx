import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
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
import LocationSelector from './LocationSelector';

const EnrollForm: React.FC = () => {
  const navigation = useNavigation();
  const picturedImageState = useRecoilValue(picturedImage);
  const resultPlantState = useRecoilValue(resultPlant);
  const areaCodeState = useRecoilValue(areaCode);
  const sigunguCodeState = useRecoilValue(sigunguCode);

  const [inputValues, setInputValues] = useState({
    place: '',
    title: '',
    content: '',
  });

  const inputChangedHandler = (
    inputIdentifier: string,
    enteredValue: string,
  ) => {
    setInputValues(curInputValues => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  };

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
    formdata.append('userId', 1);
    formdata.append('collectPictureUrl', image);
    formdata.append('areaId', areaCodeState);
    formdata.append('sigunguId', sigunguCodeState);
    formdata.append('collectPlace', inputValues.place);
    formdata.append('collectTitle', inputValues.title);
    formdata.append('collectContent', inputValues.content);

    const requestOptions = {
      method: 'POST',
      body: formdata,
      headers: {'Content-Type': 'multipart/form-data'},
    };
    await fetch('http://127.0.0.1:8000/epari/v1/collection/', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log('result-', result);
        console.log('formdata-', formdata);
      })
      .catch(error => console.log('error', error));
  };
  const plantName = (resultPlantState.plantName || '').split('_', 1);
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
        <View style={styles.inputConatiner}>
          <Text style={styles.inputLabel}>상세 지역: </Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={inputChangedHandler.bind(this, 'place')}
            value={inputValues.place}
            maxLength={50}
          />
        </View>
        <View style={styles.inputConatiner}>
          <Text style={styles.inputLabel}>제목: </Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={inputChangedHandler.bind(this, 'title')}
            value={inputValues.title}
            maxLength={100}
          />
        </View>
        <View style={styles.inputConatiner}>
          <Text style={styles.inputLabel}>내용: </Text>
          <TextInput
            style={[styles.inputBox, styles.multilineInputBox]}
            onChangeText={inputChangedHandler.bind(this, 'content')}
            value={inputValues.content}
            multiline
          />
        </View>
      </ScrollView>
      <Pressable>
        <View>
          <Text
            style={styles.button}
            onPress={() => {
              saveImage();
              Keyboard.dismiss();
              navigation.navigate('HerbBook');
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
  button: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#00845E',
    borderRadius: 8,
    margin: 8,
    fontFamily: 'NeoDGM-Regular',
  },
});
