import React from 'react';
import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.HeaderContainer}>
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0040.png')}
        style={styles.flowerImage1}
      />
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0080.png')}
        style={styles.flowerImage2}
      />
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0090.png')}
        style={styles.flowerImage3}
      />
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0190.png')}
        style={styles.flowerImage4}
      />
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0200.png')}
        style={styles.flowerImage5}
      />
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0240.png')}
        style={styles.flowerImage6}
      />
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0300.png')}
        style={styles.flowerImage7}
      />
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0320.png')}
        style={styles.flowerImage8}
      />
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0370.png')}
        style={styles.flowerImage9}
      />
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0400.png')}
        style={styles.flowerImage10}
      />
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0410.png')}
        style={styles.flowerImage11}
      />
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0470.png')}
        style={styles.flowerImage12}
      />
      <Image
        source={require('Epari/src/asset/loginpageicons/active_0670.png')}
        style={styles.flowerImage14}
      />
      <Image
        source={require('Epari/src/asset/icons/question_mark.png')}
        style={styles.question1}
      />
      <Image
        source={require('Epari/src/asset/icons/question_mark.png')}
        style={styles.question2}
      />
      <Image
        source={require('Epari/src/asset/icons/question_mark.png')}
        style={styles.question3}
      />
      <Image
        source={require('Epari/src/asset/icons/question_mark.png')}
        style={styles.question4}
      />
      <Image
        source={require('Epari/src/asset/icons/question_mark.png')}
        style={styles.question5}
      />
      <Image
        source={require('Epari/src/asset/icons/question_mark.png')}
        style={styles.question6}
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
    color: 'rgb(151, 141, 255)',
  },
  font_2: {
    fontFamily: 'NeoDGM-Regular',
    color: '#FFF7F2',
    fontSize: ScreenWidth * 0.035,
    textShadowColor: 'rgb(244, 182, 255)',
    textShadowRadius: 2,
    textShadowOffset: {
      width: ScreenWidth * 0.003,
      height: ScreenHeight * 0.003,
    },
  },
  flowerImage1: {
    width: ScreenWidth * 0.1,
    height: ScreenWidth * 0.1,
    position: 'absolute',
    top: -ScreenHeight * 0.1,
    left: ScreenWidth * 0.1,
  },
  flowerImage2: {
    width: ScreenWidth * 0.1,
    height: ScreenWidth * 0.1,
    position: 'absolute',
    top: ScreenHeight * 0.3,
    left: ScreenWidth * 0.7,
  },
  flowerImage3: {
    width: ScreenWidth * 0.1,
    height: ScreenWidth * 0.1,
    position: 'absolute',
    top: ScreenHeight * 0.75,
    left: ScreenWidth * 0.03,
  },
  flowerImage4: {
    width: ScreenWidth * 0.1,
    height: ScreenWidth * 0.1,
    position: 'absolute',
    left: ScreenWidth * 0.35,
    top: ScreenHeight * 0.7,
  },
  flowerImage5: {
    width: ScreenWidth * 0.1,
    height: ScreenWidth * 0.1,
    position: 'absolute',
    left: ScreenWidth * 0.78,
    top: -ScreenHeight * 0.05,
  },
  flowerImage6: {
    width: ScreenWidth * 0.1,
    height: ScreenWidth * 0.1,
    position: 'absolute',
    left: ScreenWidth * 0.45,
    top: ScreenHeight * 0.44,
  },
  flowerImage7: {
    width: ScreenWidth * 0.1,
    height: ScreenWidth * 0.1,
    position: 'absolute',
    left: ScreenWidth * 0.01,
    top: ScreenHeight * 0.26,
  },
  flowerImage8: {
    width: ScreenWidth * 0.1,
    height: ScreenWidth * 0.1,
    position: 'absolute',
    left: ScreenWidth * 0.65,
    top: -ScreenHeight * 0.12,
  },
  flowerImage9: {
    width: ScreenWidth * 0.1,
    height: ScreenWidth * 0.1,
    position: 'absolute',
    left: ScreenWidth * 0.08,
    top: ScreenHeight * 0.61,
  },
  flowerImage10: {
    width: ScreenWidth * 0.1,
    height: ScreenWidth * 0.1,
    position: 'absolute',
    left: ScreenWidth * 0.81,
    top: ScreenHeight * 0.12,
  },
  flowerImage11: {
    width: ScreenWidth * 0.1,
    height: ScreenWidth * 0.1,
    position: 'absolute',
    left: ScreenWidth * 0.73,
    top: ScreenHeight * 0.63,
  },
  flowerImage12: {
    width: ScreenWidth * 0.1,
    height: ScreenWidth * 0.1,
    position: 'absolute',
    left: -ScreenWidth * 0.03,
    top: -ScreenHeight * 0.014,
  },
  flowerImage14: {
    width: ScreenWidth * 0.2,
    height: ScreenWidth * 0.2,
    position: 'absolute',
    left: ScreenWidth * 0.66,
    top: ScreenHeight * 0.46,
  },
  question1: {
    width: ScreenWidth * 0.15,
    height: ScreenWidth * 0.15,
    position: 'absolute',
    left: ScreenWidth * 0.46,
    top: -ScreenHeight * 0.04,
  },
  question2: {
    width: ScreenWidth * 0.15,
    height: ScreenWidth * 0.15,
    position: 'absolute',
    left: ScreenWidth * 0.16,
    top: ScreenHeight * 0.1,
  },
  question3: {
    width: ScreenWidth * 0.15,
    height: ScreenWidth * 0.15,
    position: 'absolute',
    left: ScreenWidth * 0.56,
    top: ScreenHeight * 0.22,
  },
  question4: {
    width: ScreenWidth * 0.15,
    height: ScreenWidth * 0.15,
    position: 'absolute',
    left: ScreenWidth * 0.36,
    top: ScreenHeight * 0.32,
  },
  question5: {
    width: ScreenWidth * 0.15,
    height: ScreenWidth * 0.15,
    position: 'absolute',
    left: ScreenWidth * 0.02,
    top: ScreenHeight * 0.42,
  },
  question6: {
    width: ScreenWidth * 0.15,
    height: ScreenWidth * 0.15,
    position: 'absolute',
    left: ScreenWidth * 0.66,
    top: ScreenHeight * 0.72,
  },
});
export default Header;
