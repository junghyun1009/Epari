import React from 'react';
import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.HeaderContainer}>
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0320.png')}
        style={styles.headerImage1}
      />
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0400.png')}
        style={styles.headerImage2}
      />
      <Text style={styles.Header}>EPARI</Text>
      <View>
        <Text style={styles.font_2}>
          <Text style={styles.capital}>E</Text>ducated{' '}
          <Text style={styles.capital}>P</Text>lant{' '}
          <Text style={styles.capital}>A</Text>i{' '}
          <Text style={styles.capital}>R</Text>ecognition{' '}
          <Text style={styles.capital}>I</Text>llustrated book
        </Text>
      </View>
    </View>
  );
};

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  HeaderContainer: {
    marginTop: ScreenHeight * 0.13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage1: {
    width: ScreenWidth * 0.3,
    height: ScreenWidth * 0.3,
    position: 'absolute',
    right: ScreenWidth * 0.65,
    top: -ScreenWidth * 0.13,
  },
  headerImage2: {
    width: ScreenWidth * 0.4,
    height: ScreenWidth * 0.4,
    position: 'absolute',
    left: ScreenWidth * 0.45,
    top: ScreenWidth * 0.16,
  },
  Header: {
    fontFamily: 'NeoDGM-Regular',
    color: '#FFF7F2',
    textShadowColor: 'rgb(151, 141, 255)',
    textShadowRadius: 2,
    textShadowOffset: {
      width: ScreenWidth * 0.015,
      height: ScreenHeight * 0.01,
    },
    fontSize: ScreenWidth * 0.3,
  },
  capital: {
    fontSize: ScreenWidth * 0.07,
    color: 'rgb(101,141,219)',
  },
  font_2: {
    fontFamily: 'NeoDGM-Regular',
    color: '#FFFFFF',
    fontSize: ScreenWidth * 0.035,
    textShadowColor: 'rgb(244, 182, 255)',
    textShadowRadius: 2,
    textShadowOffset: {
      width: ScreenWidth * 0.005,
      height: ScreenHeight * 0.003,
    },
  },
});
export default Header;
