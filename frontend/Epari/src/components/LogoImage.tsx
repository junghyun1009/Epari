import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const LogoImage: React.FC = () => {
  return (
    <View>
      <Image
        style={styles.lefticon}
        source={require('Epari/src/asset/icons/demoLogo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lefticon: {
    marginTop: -100,
    marginBottom: 100,
    width: 200,
    height: 200,
  },
});
export default LogoImage;
