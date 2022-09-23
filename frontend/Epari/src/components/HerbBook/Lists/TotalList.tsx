import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TotalList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>전체목록</Text>
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
export default TotalList;
