import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {AppStackParamList} from '../../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

export type ListItem = {
  id: number;
};

export type ListItemProps = NativeStackScreenProps<
  AppStackParamList,
  'TotalList'
>;

let activeIconURL = 'Epari/src/asset/activeIcons/HerbIcon_';

const ListItem: React.FC<ListItem> = ({id}) => {
  const navigation = useNavigation<ListItemProps>();
  return (
    <View>
      <View style={styles.ListItem}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HerbDetail', {id: 1})}>
          <Image
            style={styles.ImageItem}
            source={require(activeIconURL + '.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {},
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    overflow: 'scroll',
    justifyContent: 'center',
    backgroundColor: '#FFF7F2',
  },
  font: {
    fontFamily: 'NeoDGM-Regular',
  },
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
    width: 70,
    height: 70,
  },
  ItemName: {
    alignSelf: 'center',
    borderWidth: 1,
  },
});

export default ListItem;
