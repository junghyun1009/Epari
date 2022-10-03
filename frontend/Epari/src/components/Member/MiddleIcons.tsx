import React from 'react';
import {Image, Dimensions, View, StyleSheet} from 'react-native';

const MiddleIcons: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0670.png')}
        style={styles.middleImage1}
      />
    </View>
  );
};

let ScreenWidth = Dimensions.get('window').width;
// let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleImage1: {
    width: ScreenWidth * 0.8,
    height: ScreenWidth * 0.8,
    position: 'absolute',
    left: -ScreenWidth * 0.56,
    top: ScreenWidth * 0.15,
  },
});
export default MiddleIcons;
