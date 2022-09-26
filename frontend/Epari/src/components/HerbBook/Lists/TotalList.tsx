import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {AppStackParamList} from '../../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type TotalListScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'TotalList'
>;

let herbiconURL = 'Epari/src/asset/herbIcons/HerbIcon_';

const TotalList: React.FC<TotalListScreenProps> = ({navigation}) => {
  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <View>
          <View style={styles.ListItem}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HerbDetail', {id: 1})}>
              <Image
                style={styles.ImageItem}
                source={require(herbiconURL + '1.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '2.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '3.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '4.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '5.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '6.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '7.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '8.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '9.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '10.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '11.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '12.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '7.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '8.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '9.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '10.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '11.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '12.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '7.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '8.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '9.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '10.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '11.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Image
            style={styles.ImageItem}
            source={require(herbiconURL + '12.png')}
          />
        </View>
        <View style={styles.ListItem}>
          <Text style={styles.font}>민들레</Text>
        </View>
        <View style={styles.ListItem}>
          <Text style={styles.font}>도라지</Text>
        </View>
        <View style={styles.ListItem}>
          <Text style={styles.font}>인삼</Text>
        </View>
        <View style={styles.ListItem}>
          <Text style={styles.font}>양귀비</Text>
        </View>
        <View style={styles.ListItem}>
          <Text style={styles.font}>코카인</Text>
        </View>
      </View>
    </ScrollView>
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
export default TotalList;
