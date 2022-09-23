import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import HerbBookHeader from '../components/HerbBook/Header';
import AcheivePoint from '../components/HerbBook/AchievePoint';
import HerbBookStack from '../navigation/HerbBookStack';

const HerbBook: React.FC = () => {
  return (
    <ScrollView>
      <HerbBookHeader />
      <AcheivePoint />
      <HerbBookStack />
      <View style={styles.container}>
        <Text style={styles.fontTest}>Epari Herb Book Screen</Text>
      </View>
    </ScrollView>
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
});

export default HerbBook;
