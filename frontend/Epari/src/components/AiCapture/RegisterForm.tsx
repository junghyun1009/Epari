import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  Keyboard,
  Dimensions,
} from 'react-native';
import {useRecoilValue} from 'recoil';
import {
  areaCode,
  picturedImage,
  resultPlant,
  sigunguCode,
} from '../../store/classification';

import AppText from '../AppText';
import LocationSelector from './LocationSelector';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

const RegisterForm: React.FC = ({}) => {
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

  // 칭호 1 조건: 전체 획득 개수 파악 => 글을 하나도 안 썼을 때 글을 쓰면 얻게 하기
  const [collections, setCollections] = useState(0);
  // 칭호 2 조건: 도라지 획득 개수 파악 => 도라지 글이 두개인데 새로 쓰는 글도 도라지일 경우 얻게 하기
  const [dolargeCnt, setDolargeCnt] = useState(0);
  // 칭호 3 조건: 산삼 획득 개수 파악 => 산삼 글이 0개인데 새로 쓰는 글이 산삼 글일 경우 얻게 하기
  const [sansamCnt, setSansamCnt] = useState(0);
  // 칭호 4, 5 조건: 획득 종류 개수 파악
  const [plantcnt, setPlantcnt] = useState([]);

  const [obtained, setObtained] = useState({});

  useEffect(() => {
    getData();
  }, []);
  // useEffect(() => {
  //   getCollection();
  // }, [token]);

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
  async function fetchToken() {
    const user = auth().currentUser;
    await user
      ?.getIdToken(true)
      .then(idToken => {
        AsyncStorage.removeItem('GoogleAccessToken');
        AsyncStorage.setItem('GoogleAccessToken', idToken);
      })
      .catch(error => console.log(error));
  }

  const getData = async () => {
    try {
      let storedToken = await AsyncStorage.getItem('GoogleAccessToken');
      if (storedToken !== null) {
        console.log('storedToken : ', storedToken);
        setToken(storedToken);
      }
    } catch (e) {
      console.log(e);
    }
    const storedToken = await AsyncStorage.getItem('GoogleAccessToken');
    if (storedToken) {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: storedToken,
        },
      };
      fetch('http://j7a201.p.ssafy.io/epari/v1/collection/', requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          // console.log(collections);
          let cnt = 0;
          let plant = [];
          result.forEach(each => {
            console.log(each.plantId, cnt + each.collectionCnt);
            cnt += each.collectionCnt;
            if (each.isCollected) {
              plant.push(each.plantId);
            }
          });
          setCollections(cnt);
          setPlantcnt(plant);

          let dolarge = result[13].collectionCnt;
          setDolargeCnt(dolarge);

          let sansam = result[66].collectionCnt;
          setSansamCnt(sansam);
        });
    }
  };
  console.log('token', token);
  console.log('cnt', collections);
  console.log('dolarge', dolargeCnt);
  console.log('sansam', sansamCnt);

  const saveImage = async () => {
    await fetchToken();
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
    formdata.append('collectPictureUrl', image);
    formdata.append('areaId', areaCodeState);
    formdata.append('sigunguId', sigunguCodeState);
    formdata.append('collectPlace', '1');
    formdata.append('collectTitle', inputs.title.value);
    formdata.append('collectContent', inputs.content.value);

    const requestOptions = {
      method: 'POST',
      body: formdata,
      headers: {
        'Content-Type': 'multipart/form-data',
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

    // 칭호
    // 1번
    if (collections === 0) {
      const obtained = new FormData();
      obtained.append('titleId', 1);
      const requestPost = {
        method: 'POST',
        body: obtained,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token,
        },
      };
      fetch('http://j7a201.p.ssafy.io/epari/v1/titles/', requestPost)
        .then(response => {
          response.json();
        })
        .then(result => {
          console.log('1111111111', result);
          console.log(obtained);
        });
    } else if (dolargeCnt === 2 && resultPlantState.plantId === 14) {
      const obtained = new FormData();
      obtained.append('titleId', 2);
      const requestPost = {
        method: 'POST',
        body: obtained,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token,
        },
      };
      fetch('http://j7a201.p.ssafy.io/epari/v1/titles/', requestPost)
        .then(response => {
          response.json();
        })
        .then(result => {
          console.log('1111111111', result);
          console.log(obtained);
        })
        .catch(err => console.log(err));
    } else if (sansamCnt === 0 && resultPlantState.plantId === 67) {
      const obtained = new FormData();
      obtained.append('titleId', 3);
      const requestPost = {
        method: 'POST',
        body: obtained,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token,
        },
      };
      fetch('http://j7a201.p.ssafy.io/epari/v1/titles/', requestPost)
        .then(response => {
          response.json();
        })
        .then(result => {
          console.log('1111111111', result);
          console.log(obtained);
        });
    } else if (
      plantcnt.length === 9 &&
      !plantcnt.includes(resultPlantState.plantId)
    ) {
      const obtained = new FormData();
      obtained.append('titleId', 4);
      const requestPost = {
        method: 'POST',
        body: obtained,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token,
        },
      };
      fetch('http://j7a201.p.ssafy.io/epari/v1/titles/', requestPost)
        .then(response => {
          response.json();
        })
        .then(result => {
          console.log('1111111111', result);
          console.log(obtained);
        });
    } else if (
      plantcnt.length === 66 &&
      !plantcnt.includes(resultPlantState.plantId)
    ) {
      const obtained = new FormData();
      obtained.append('titleId', 5);
      const requestPost = {
        method: 'POST',
        body: obtained,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token,
        },
      };
      fetch('http://j7a201.p.ssafy.io/epari/v1/titles/', requestPost)
        .then(response => {
          response.json();
        })
        .then(result => {
          console.log('1111111111', result);
          console.log(obtained);
        });
    }

    navigation.navigate('HerbDetail', {id: resultPlantState.plantId});
  };

  const plantName = (resultPlantState.plantName || '').split('_', 1);

  const formIsInvalid = !inputs.title.isValid || !inputs.content.isValid;

  return (
    <KeyboardAvoidingView
      // behavior="padding"
      // keyboardVerticalOffset={-170}
      style={styles.container}>
      <ScrollView>
        <View style={styles.plantInfo}>
          <Image
            source={{uri: picturedImageState.uri}}
            style={styles.plantImage}
          />
          <AppText style={styles.plantName}>{plantName}</AppText>
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
          <AppText style={styles.inputLabel}>제목: </AppText>
          <TextInput
            style={styles.inputBox}
            onChangeText={inputChangedHandler.bind(this, 'title')}
            value={inputs.title.value}
            maxLength={100}
          />
        </View>
        <View style={styles.inputConatiner}>
          <AppText style={styles.inputLabel}>내용: </AppText>
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
      <Pressable style={styles.button}>
        <AppText
          style={styles.buttonText}
          onPress={() => {
            saveImage();
            Keyboard.dismiss();
          }}>
          등록하기
        </AppText>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default RegisterForm;

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: ScreenWidth * 0.05,
    backgroundColor: '#FFF7F2',
  },
  plantInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: ScreenWidth * 0.03,
  },
  plantImage: {
    width: ScreenWidth * 0.65,
    height: ScreenWidth * 0.65,
    borderWidth: 3,
    borderRadius: 12,
    borderColor: '#000',

    margin: ScreenWidth * 0.06,
  },
  plantName: {
    fontSize: ScreenHeight * 0.035,
    textShadowColor: '#99AEBB',
    textShadowRadius: 2,
    textShadowOffset: {
      width: 1.8,
      height: 1.8,
    },
  },
  inputConatiner: {
    marginTop: ScreenHeight * 0.01,
  },
  inputLabel: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: ScreenHeight * 0.02,
    marginVertical: ScreenHeight * 0.01,
  },
  inputBox: {
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 12,
    borderColor: '#3A4A40',
    backgroundColor: '#F6EDD9',
    fontFamily: 'NeoDGM-Regular',
  },
  multilineInputBox: {
    minHeight: ScreenHeight * 0.12,
    textAlignVertical: 'top',
  },
  errorText: {
    marginVertical: ScreenHeight * 0.02,
    color: '#99AEBB',
    textAlign: 'center',
    fontSize: ScreenHeight * 0.018,
  },
  button: {
    width: ScreenWidth * 0.33,
    paddingVertical: ScreenHeight * 0.01,
    backgroundColor: '#00845E',
    borderWidth: 5,
    borderRadius: 11,
    borderColor: '#00845E',
    margin: ScreenWidth * 0.03,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: ScreenHeight * 0.025,
    textShadowColor: '#3A4A40',
    textShadowRadius: 2,
    textShadowOffset: {
      width: 1.8,
      height: 1.8,
    },
  },
});
