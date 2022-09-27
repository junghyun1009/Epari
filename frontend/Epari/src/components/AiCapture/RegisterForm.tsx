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
import {picturedImage, resultPlantName} from '../../store/classification';

const EnrollForm: React.FC = () => {
  const picturedImageState = useRecoilValue(picturedImage);
  const resultPlantNameState = useRecoilValue(resultPlantName);
  // const [inputTitle, setInputTitle] = useState('')
  const [inputContent, setInputContent] = useState('');
  console.log('capture', resultPlantNameState);

  // const handleTitleInput = enteredText => {
  //   setInputTitle(enteredText)
  // }
  const handleContentInput = enteredText => {
    setInputContent(enteredText);
    console.log(inputContent);
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
    formdata.append('plantId', 40);
    formdata.append('userId', 2);
    formdata.append('collectPictureUrl', image);
    // formdata.append('collectTitle', 'title');
    formdata.append('collectContent', inputContent);
    console.log(inputContent);
    // console.log('formdata:', formdata);
    const requestOptions = {
      method: 'POST',
      body: formdata,
      // headers: {'Content-Type': 'multipart/form-data'},
    };
    await fetch('http://127.0.0.1:8000/epari/v1/collection/', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log('result-', result);
        console.log('formdata-', formdata);
      })
      .catch(error => console.log('error', error));
  };
  const plantName = (resultPlantNameState || '').split('_', 1);
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={-20}
      style={styles.container}>
      <ScrollView>
        <View style={styles.plantInfo}>
          <Image
            source={{uri: picturedImageState.uri}}
            style={styles.plantImage}
          />
          <Text style={styles.plantName}>{plantName}</Text>
        </View>
        <View style={styles.inputConatiner}>
          <Text style={styles.inputLabel}>제목: </Text>
          <TextInput
            style={styles.inputBox}
            // onChangeText={handleTitleInput}
            // value={inputTitle}
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
    width: 300,
    height: 300,
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
