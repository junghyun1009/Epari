import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GetTitle: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>획득한 칭호 목록</Text>
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

export default GetTitle;
