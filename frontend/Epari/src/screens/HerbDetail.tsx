import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '../types';
import {HerbDetailHeader} from '../components/HerbDetail';

export type DetailScreenProps = StackScreenProps<
  AppStackParamList,
  'HerbDetail'
>;

const HerbDetail: React.FC<DetailScreenProps> = ({
  route,
}: DetailScreenProps) => {
  const id = route.params.id;
  return (
    <ScrollView style={styles.background}>
      <HerbDetailHeader />
      <View style={styles.container}>
        <Text style={styles.fontTest}>Epari Herb Detail Screenn</Text>
        {id === undefined ? null : <Text>id:{id}</Text>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFF7F2',
  },
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
export default HerbDetail;
