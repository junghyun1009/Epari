import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import {useNavigation} from '@react-navigation/native';

const AiCapture: React.FC = ({}) => {
  const navigation = useNavigation();

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
      }
    });
  };

  return (
    <View style={styles.container}>
      <Pressable>
        <View>
          <Text
            style={styles.fontTest}
            onPress={() => {
              uploadImage();
              navigation.navigate('AiReulst');
            }}>
            CAMERA
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontTest: {
    fontFamily: 'NeoDGM-Regular',
  },
});

export default AiCapture;
