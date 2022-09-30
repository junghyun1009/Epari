import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.fontTest}>E p a r i</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomColor: '#007C2B',
    borderBottomWidth: 2,
    width: 800,
    height: 60,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  fontTest: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: 32,
    color: 'black',
    paddingTop: 15,
  },
});
export default Header;
