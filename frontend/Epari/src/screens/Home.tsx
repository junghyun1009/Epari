import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fontTest}>Epari Home Screen</Text>
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
