import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const TitleListHeader: React.FC = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.lefticon}
        source={require('Epari/src/asset/icons/lefticon.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#697798',
    height: 60,
    flexDirection: 'row',
  },
  fontTest: {
    fontFamily: 'NeoDGM-Regular',
  },
  lefticon: {
    width: 40,
    height: 40,
    left: 11,
    top: 11,
  },
});
export default TitleListHeader;
