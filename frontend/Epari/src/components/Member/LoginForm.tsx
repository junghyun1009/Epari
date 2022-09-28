import React, {useState} from 'react';
import {Alert, Pressable, Modal, StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import axios from 'axios';
import LogoutButton from './LogoutButton';

const GoogleSignIn: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.header}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <GoogleSigninButton
              style={styles.gbtn}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              // size={GoogleSigninButton.Size.Icon}
              onPress={() =>
                onGoogleButtonPress().then(() => {
                  console.log('Signed in with Google!');
                  tokenToken();
                })
              }
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>로그인 안 해</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>로그인 필요!!</Text>
      </Pressable>
      <LogoutButton />
    </View>
  );
};

async function tokenToken() {
  const user = auth().currentUser;
  user.getIdToken().then(idToken => postToken(idToken));
  console.log(user);
}

async function postToken(idToken: any) {
  axios
    .post('http://127.0.0.1:8000/epari/v1/accounts/login', {
      // userId: header,
      // userPassword: user.password,
      headers: {
        Authorization: idToken,
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(error => {
      console.log('error : ', error.response);
    });
}

// 구글 로그인 과정
async function onGoogleButtonPress() {
  const {idToken, user} = await GoogleSignin.signIn();
  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  gbtn: {
    width: 240,
    height: 60,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default GoogleSignIn;
