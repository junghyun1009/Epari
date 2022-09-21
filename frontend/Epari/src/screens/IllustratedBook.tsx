import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const IBook: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Epari illustrated Book Screen</Text>
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

export default IBook;
