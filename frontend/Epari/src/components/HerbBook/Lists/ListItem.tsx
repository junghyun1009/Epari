import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../../types';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

export type ListItemScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'TotalList'
>;

export type ListItemProps = CompositeScreenProps<
  BottomTabScreenProps<AppStackParamList, 'HerbBook'>,
  MaterialTopTabScreenProps<AppStackParamList, 'TotalList'>
>;

export type ListItem = {
  id?: any;
  navigation: any;
};

const ListItem: React.FC<ListItem> = ({id, navigation}) => {
  return (
    <View>
      <View style={styles.ListItem}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HerbDetail', {id: id})}>
          <Image style={styles.ImageItem} source={id} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ListItem: {
    margin: 17,
    width: 70,
    height: 70,
    borderRadius: 12,
    fontFamily: 'NeoDGM-Regular',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2.4,
  },
  ImageItem: {
    width: 60,
    height: 60,
  },
  ItemName: {
    alignSelf: 'center',
    borderWidth: 1,
  },
});

export default ListItem;
