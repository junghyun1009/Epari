import React from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';

const MiddleIcons: React.FC = () => {
  return <View style={styles.container}></View>;
};

let ScreenWidth = Dimensions.get('window').width;
// let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MiddleIcons;
