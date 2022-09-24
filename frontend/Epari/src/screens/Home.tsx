import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import AiCapture from './AiCapture';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <AiCapture />
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

export default Home;
