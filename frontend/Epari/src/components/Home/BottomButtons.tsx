import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

type BottomProps = {
  navigation: any;
};

const Bottom: React.FC<BottomProps> = ({navigation}) => {
  async function movePageAI() {
    navigation.navigate('AiCapture');
  }
  async function movePageBook() {
    navigation.navigate('HerbBook');
  }
  return (
    <View style={styles.bottomBox}>
      <TouchableOpacity onPress={() => movePageAI()}>
        <View style={styles.leftButton}>
          <Text style={styles.font_3}>A I</Text>
          <Text style={styles.font_2}>이 꽃이 무슨꽃인가?</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => movePageBook()}>
        <View style={styles.rightButton}>
          <Text style={styles.font_3}>Book</Text>
          <Text style={styles.font_2}>내가 수집한 꽃 보여줘!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  font_1: {
    fontFamily: 'NeoDGM-Regular',
    color: '#FFFFFF',
  },
  font_2: {
    fontFamily: 'NeoDGM-Regular',
    color: '#FFFFFF',
    fontSize: 15,
    textShadowColor: 'rgb(244, 182, 255)',
    textShadowRadius: 2,
    textShadowOffset: {
      width: 1.8,
      height: 1.8,
    },
  },
  font_3: {
    fontFamily: 'NeoDGM-Regular',
    color: '#FFFFFF',
    fontSize: 65,
    textShadowColor: 'rgb(244, 182, 255)',
    textShadowRadius: 2,
    textShadowOffset: {
      width: 1.8,
      height: 1.8,
    },
  },
  bottomBox: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: ScreenHeight * 0.1,
    marginBottom: -50,
  },
  leftButton: {
    width: ScreenWidth * 0.38,
    height: ScreenWidth * 0.38,
    backgroundColor: '#F7E600',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 85,
    borderWidth: 7,
    borderColor: '#F89B00',
    left: -ScreenWidth * 0.09,
  },
  rightButton: {
    width: ScreenWidth * 0.38,
    height: ScreenWidth * 0.38,
    backgroundColor: '#00498C',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 85,
    borderWidth: 7,
    borderColor: '#464964',
    right: -ScreenWidth * 0.09,
  },
});
export default Bottom;
