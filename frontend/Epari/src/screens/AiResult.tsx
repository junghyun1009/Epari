import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useRecoilValue} from 'recoil';
import {pictureImageUrl} from '../store/picturedImageUrl';

const AiResult: React.FC = () => {
  const picturedImageUrl = useRecoilValue(pictureImageUrl);
  console.log('pictured', picturedImageUrl);
  return (
    <View style={styles.container}>
      <Text style={styles.fontTest}>Epari AI result Screen</Text>
      <Image
        source={{uri: picturedImageUrl}}
        style={{width: 150, height: 150}}
      />
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

export default AiResult;
