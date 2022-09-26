import React from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '../types';

export type DetailScreenProps = StackScreenProps<AppStackParamList, 'Detail'>;

const HerbDetail = ({route}: DetailScreenProps) => {
  return (
    <View>
      <Text>{route.params.id}</Text>
    </View>
  );
};

export default HerbDetail;
