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
  const picturedImageState = useRecoilValue(picturedImage);
  const resultPlantState = useRecoilValue(resultPlant);
  const [inputPlace, setInputPlace] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  const areaCodeState = useRecoilValue(areaCode);
  const sigunguCodeState = useRecoilValue(sigunguCode);

  const handlePlaceInput = (enteredText: string) => {
    setInputPlace(enteredText);
  };
  const handleTitleInput = (enteredText: string) => {
    setInputTitle(enteredText);
  };
  const handleContentInput = (enteredText: string) => {
    setInputContent(enteredText);
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
    console.log(areaCodeState);
    formdata.append('sigunguId', sigunguCodeState);
    formdata.append('collectPlace', inputPlace);
    formdata.append('collectTitle', inputTitle);
    formdata.append('collectContent', inputContent);

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
            onChangeText={handlePlaceInput}
            value={inputPlace}
            maxLength={50}
          />
        </View>
        <View style={styles.inputConatiner}>
          <Text style={styles.inputLabel}>제목: </Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={handleTitleInput}
            value={inputTitle}
            maxLength={100}
          />
        </View>
        <View style={styles.inputConatiner}>
          <Text style={styles.inputLabel}>메모: </Text>
          <TextInput
            style={[styles.inputBox, styles.multilineInputBox]}
            onChangeText={handleContentInput}
            value={inputContent}
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
