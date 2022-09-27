import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const GoogleSignIn: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text>로그인</Text>
      <Button
        title="Google Sign-In"
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }
      />
    </View>
  );
};

async function onGoogleButtonPress() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
  },
});
export default GoogleSignIn;
