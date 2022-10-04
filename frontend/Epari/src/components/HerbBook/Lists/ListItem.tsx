import React from 'react';
import {
  View,
  Image,
  Text,
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
  'TotalList'
>;

export type ListItemProps = CompositeScreenProps<
  BottomTabScreenProps<AppStackParamList, 'HerbBook'>,
  MaterialTopTabScreenProps<AppStackParamList, 'TotalList'>
>;

export type ListItem = {
  id?: any;
  plantName: string;
  count: number;
  navigation: any;
};

const ListItem: React.FC<ListItem> = ({id, plantName, count, navigation}) => {
  if (count > 0) {
    return (
      <View>
        <View style={styles.ListItem}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HerbDetail', {id: id})}>
            <Image style={styles.ImageItem} source={id} />
          </TouchableOpacity>
        </View>
        <View style={styles.plantNameContainer}>
          <Text style={styles.fontName}>{plantName}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <View style={styles.ListItem}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HerbDetail', {id: id})}>
            <Image
              style={styles.ImageItem}
              source={require('Epari/src/asset/icons/question_mark.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.plantNameContainer}>
          <Text style={styles.fontName}>{plantName}</Text>
        </View>
      </View>
    );
  }
};

let ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  ListItem: {
    margin: ScreenWidth * 0.03,
    width: ScreenWidth * 0.17,
    height: ScreenWidth * 0.17,
    borderRadius: 12,
    fontFamily: 'NeoDGM-Regular',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2.4,
    backgroundColor: '#FFFFFF',
  },
  ImageItem: {
    width: ScreenWidth * 0.14,
    height: ScreenWidth * 0.14,
  },
  ItemName: {
    alignSelf: 'center',
    borderWidth: 1,
  },
  plantNameContainer: {
    marginTop: -ScreenWidth * 0.027,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(152,180,234)',
    borderRadius: 30,
    width: ScreenWidth * 0.18,
    alignSelf: 'center',
  },
  fontName: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: 11,
    color: '#FFFFFF',
  },
});

export default ListItem;
