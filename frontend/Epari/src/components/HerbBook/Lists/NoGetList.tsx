import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NoGetList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>약초목록????????????????????????????????</Text>
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
export default NoGetList;
