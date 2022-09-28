import React from 'react';
import {Image, StyleSheet, View, Animated, Pressable} from 'react-native';
import AiCamera from '../components/AiCapture/AiCamera';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {
  capturedSubImage,
  picturedImage,
  resultPlantName,
} from '../store/classification';
import AppText from '../components/AppText';
import {useNavigation} from '@react-navigation/native';

const AiSpareResult: React.FC = () => {
  const navigation = useNavigation();
  const picturedImageState = useRecoilValue(picturedImage);
  const capturedSubImageState = useRecoilValue(capturedSubImage);
  const setResultPlantName = useSetRecoilState(resultPlantName);
  const plant = useRecoilValue(resultPlantName);

  const picturedImageUrl = picturedImageState.uri;
  // const priorSubImageUrl = capturedSubImageState[0].detailPictureUrl;
  // const secondarySubImageUrl = capturedSubImageState[1].detailPictureUrl;
  console.log('capture', capturedSubImageState);

  const scrollY = React.useRef(new Animated.Value(0)).current;

  const setPlantName = (item: any) => {
    setResultPlantName(item.plantName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <View>
            <Image source={{uri: picturedImageUrl}} style={styles.image} />
          </View>
          {/* <Image source={{uri: priorSubImageUrl}} style={styles.image} />
          <Text>{capturedSubImageState[0].plantName}</Text>
          <Image source={{uri: secondarySubImageUrl}} style={styles.image} />
          <Text>{capturedSubImageState[1].plantName}</Text> */}
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
                      setPlantName(item);
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
                        translateY: Animated.divide(scrollY, 190).interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 12],
                        }),
                      },
                    ],
                  },
                ]}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.textContainer}>
        <AppText>둘 중 일치하는 식물을 선택해주세요</AppText>
      </View>
      <View style={styles.textContainer}>
        <AppText>일치하는 식물이 없나요?</AppText>
        <AiCamera style={styles.button} name={'다시 찍기'} />
      </View>
      {/* <View style={styles.buttonContainer}></View> */}
    </View>
  );
};

export default AiSpareResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  carousel: {
    height: 190,
    overflow: 'hidden',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 12,
    margin: 8,
    resizeMode: 'cover',
  },
  plantName: {
    margin: 3,
    textAlign: 'center',
  },
  pagination: {
    position: 'absolute',
    top: 75,
    right: 12,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 8,
    backgroundColor: '#F6EDD9',
    marginBottom: 6,
  },
  dotIndicator: {
    width: 12,
    height: 12,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: '#00845E',
    borderColor: '#F6EDD9',
    position: 'absolute',
    top: -3,
    right: -3,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: '#00845E',
    borderRadius: 8,
    margin: 8,
    fontFamily: 'NeoDGM-Regular',
  },
});
