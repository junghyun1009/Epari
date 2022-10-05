import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.HeaderContainer}>
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
      <Text style={styles.font_3}>
        press login to <Text style={styles.capital}>start</Text>
      </Text>
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
  Header: {
    fontFamily: 'NeoDGM-Regular',
    color: '#FFF7F2',
    // textShadowColor: 'rgb(151, 141, 255)',
    textShadowColor: '#FFAAAA',
    textShadowRadius: 2,
    textShadowOffset: {
      width: ScreenWidth * 0.015,
      height: ScreenHeight * 0.01,
    },
    fontSize: ScreenWidth * 0.3,
  },
  capital: {
    fontSize: ScreenWidth * 0.07,
    color: '#CEDDF2',
  },
  font_2: {
    fontFamily: 'NeoDGM-Regular',
    color: '#FFF7F2',
    fontSize: ScreenWidth * 0.035,
    textShadowColor: 'rgb(244, 182, 255)',
    textShadowRadius: 2,
    textShadowOffset: {
      width: ScreenWidth * 0.004,
      height: ScreenHeight * 0.0025,
    },
  },
  font_3: {
    fontFamily: 'NeoDGM-Regular',
    color: '#FFF7F2',
    position: 'absolute',
    fontSize: ScreenWidth * 0.035,
    textShadowColor: 'rgb(244, 182, 255)',
    textShadowRadius: 2,
    top: ScreenHeight * 0.375,
    textShadowOffset: {
      width: ScreenWidth * 0.003,
      height: ScreenHeight * 0.003,
    },
  },
});
export default Header;
