import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AchievePoint: React.FC = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.achieveItemContainer}>
          <Text style={styles.achieveItemPercent}>37%</Text>
          <Text style={styles.achieveItemName}>약초</Text>
        </View>
        <View style={styles.achieveItemContainer}>
          <Text style={styles.achieveItemPercent}>62%</Text>
          <Text style={styles.achieveItemName}>꽃</Text>
        </View>
        <View style={styles.achieveItemContainer}>
          <Text style={styles.achieveItemPercent}>54%</Text>
          <Text style={styles.achieveItemName}>전체</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  fontTest: {
    fontFamily: 'NeoDGM-Regular',
  },
  achieveItemContainer: {
    paddingTop: 14,
    paddingBottom: 15,
    padding: 50,
    flexDirection: 'column',
  },
  achieveItemPercent: {
    fontFamily: 'NeoDGM-Regular',
    textAlign: 'center',
    color: '#110105',
    fontSize: 22,
  },
  achieveItemName: {
    textAlign: 'center',
    fontFamily: 'NeoDGM-Regular',
    fontSize: 17,
  },
});
export default AchievePoint;
