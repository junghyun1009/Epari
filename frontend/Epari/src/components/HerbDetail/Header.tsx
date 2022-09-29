import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

type HerbDetailHeaderProps = {
  navigation: any;
};

const HerbDetailHeader: React.FC<HerbDetailHeaderProps> = ({navigation}) => {
  return (
    <View style={styles.header}>
      <View style={styles.leftIconContainer}>
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
          <Image
            style={styles.lefticon}
            source={require('Epari/src/asset/icons/lefticon.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#007C2B',
    height: 60,
    flexDirection: 'row',
  },
  fontTest: {
    fontFamily: 'NeoDGM-Regular',
  },
  leftIconContainer: {
    width: 50,
    height: 50,
    left: 11,
    top: 11,
  },
  lefticon: {
    width: 40,
    height: 40,
  },
});
export default HerbDetailHeader;
