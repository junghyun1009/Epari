import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AiCapture: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Epari Camera Capture Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AiCapture;
