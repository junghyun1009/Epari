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
} from 'react-native';
import {useRecoilValue} from 'recoil';
import {picturedImage, capturedImage} from '../../store/classification';

const EnrollForm: React.FC = () => {
  const picturedImageState = useRecoilValue(picturedImage);
  const capturedImageState = useRecoilValue(capturedImage);
  // const [inputTitle, setInputTitle] = useState('')
  const [inputContent, setInputContent] = useState('');
  console.log('capture', capturedImageState);

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

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={25}
      style={styles.container}>
      <ScrollView>
        <Image source={{uri: picturedImageState.uri}} style={styles.image} />
        <Text style={styles.plantName}>{capturedImageState.plantName}</Text>
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
            style={styles.inputBox}
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
    padding: 24,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 12,
    margin: 24,
  },
  inputConatiner: {},
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
