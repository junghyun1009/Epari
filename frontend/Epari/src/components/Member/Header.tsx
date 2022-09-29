import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const MemberHeader: React.FC = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.lefticon}
        source={require('Epari/src/asset/icons/lefticon.png')}
      />
      <Text style={styles.fontTest}>로그인</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomColor: '#007C2B',
    borderBottomWidth: 2,
    width: 440,
    height: 60,
    justifyContent: 'center',
    flexDirection: 'row',
    right: 20,
  },
  fontTest: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: 24,
    color: 'black',
    paddingTop: 20,
  },
  lefticon: {
    width: 40,
    height: 40,
    right: 110,
    top: 10,
  },
});
export default MemberHeader;
