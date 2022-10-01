import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Animated,
  Pressable,
  Dimensions,
} from 'react-native';
import AiCamera from '../components/AiCapture/AiCamera';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {
  capturedSubImage,
  picturedImage,
  resultPlant,
} from '../store/classification';
import AppText from '../components/AppText';
import {useNavigation} from '@react-navigation/native';
import PlantCarousel from '../components/AiCapture/PlantCarousel';

const AiSpareResult: React.FC = () => {
  const navigation = useNavigation();
  const picturedImageState = useRecoilValue(picturedImage);
  const capturedSubImageState = useRecoilValue(capturedSubImage);
  const setResultPlantState = useSetRecoilState(resultPlant);
  const plant = useRecoilValue(resultPlant);

  const picturedImageUrl = picturedImageState.uri;
  console.log('capture', capturedSubImageState);

  const scrollY = React.useRef(new Animated.Value(0)).current;

  const setPlantState = (item: any) => {
    const plantState = {
      plantId: item.plantId,
      plantName: item.plantName,
    };
    setResultPlantState(plantState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <AppText style={styles.text}>
          둘 중 일치하는 식물을 선택해주세요
        </AppText>
      </View>
      <View style={styles.imageContainer}>
        <View>
          <Image source={{uri: picturedImageUrl}} style={styles.image} />
        </View>
        <View style={styles.carousel}>
          <Animated.FlatList
            data={capturedSubImageState}
            keyExtractor={(_, index) => index.toString()}
            snapToInterval={190}
            decelerationRate="fast"
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollY}}}],
              {useNativeDriver: true},
            )}
            renderItem={({item}) => {
              return (
                <Pressable
                  onPress={() => {
                    setPlantState(item);
                    navigation.navigate('AiRegister');
                  }}>
                  <Image
                    source={{uri: item.detailPictureUrl}}
                    style={styles.image}
                  />
                  <AppText style={styles.plantName}>
                    {(item.plantName || '').split('_', 1)}
                  </AppText>
                </Pressable>
              );
            }}
          />
          <View style={styles.pagination}>
            {capturedSubImageState.map((_, index) => {
              return <View key={index} style={[styles.dot]} />;
            })}
            <Animated.View
              style={[
                styles.dotIndicator,
                {
                  transform: [
                    {
                      translateY: Animated.divide(
                        scrollY,
                        ScreenWidth * 0.35 + ScreenHeight * 0.06,
                      ).interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, ScreenHeight * 0.07],
                      }),
                    },
                  ],
                },
              ]}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <AppText style={styles.text}>일치하는 식물이 없나요?</AppText>
        <AiCamera
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          name={'다시 찍기'}
        />
      </View>
    </View>
  );
};

export default AiSpareResult;

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: ScreenHeight * 0.02,
    padding: ScreenHeight * 0.02,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  carousel: {
    height: ScreenWidth * 0.35 + ScreenHeight * 0.06,
    overflow: 'hidden',
  },
  image: {
    width: ScreenWidth * 0.35,
    height: ScreenWidth * 0.35,
    borderRadius: 12,
    margin: ScreenWidth * 0.03,
    resizeMode: 'cover',
  },
  plantName: {
    fontSize: ScreenHeight * 0.018,
    margin: ScreenWidth * 0.01,
    textAlign: 'center',
  },
  pagination: {
    position: 'absolute',
    top: ScreenHeight * 0.035,
    right: 1,
  },
  dot: {
    width: ScreenWidth * 0.01,
    height: ScreenHeight * 0.07,
    borderRadius: 8,
    backgroundColor: '#D3D3D3',
  },
  dotIndicator: {
    width: ScreenWidth * 0.01,
    height: ScreenHeight * 0.07,
    borderRadius: 8,
    backgroundColor: '#00845E',
    position: 'absolute',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: ScreenWidth * 0.3,
    paddingVertical: ScreenHeight * 0.02,
    borderRadius: 8,
    margin: ScreenWidth * 0.03,
    backgroundColor: '#00845E',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },
});
