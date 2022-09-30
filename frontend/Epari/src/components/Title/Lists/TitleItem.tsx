import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../../types';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

export type ListItemScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'TotalTitle'
>;

export type ListItemProps = CompositeScreenProps<
  BottomTabScreenProps<AppStackParamList, 'TitleList'>,
  MaterialTopTabScreenProps<AppStackParamList, 'TotalTitle'>
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

let ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  ListItem: {
    margin: ScreenWidth * 0.03,
    width: ScreenWidth * 0.16,
    height: ScreenWidth * 0.16,
    borderRadius: 12,
    fontFamily: 'NeoDGM-Regular',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2.4,
    backgroundColor: '#FFFFFF',
  },
  ImageItem: {
    width: ScreenWidth * 0.13,
    height: ScreenWidth * 0.13,
  },
  ItemName: {
    alignSelf: 'center',
    borderWidth: 1,
  },
});

export default ListItem;
