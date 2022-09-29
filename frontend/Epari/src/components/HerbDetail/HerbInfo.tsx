import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

type HerbInfoProps = {
  DetailInfo: {
    plantName: string;
    detailPictureUrl: any;
    plantDescription: string;
    collection: {
      collectId: number;
      collectPictureUrl: string;
      collectDate: string;
      collectTitle: string;
      collectContent: string;
      collectPlace: string;
      plantId: number;
      userId: string;
      locationId: string;
    }[];
  };
};

let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

const HerbInfo: React.FC<HerbInfoProps> = ({DetailInfo}) => {
  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.DetailImage}
          source={DetailInfo.detailPictureUrl}
        />
      </View>
      <View style={styles.nameContatiner}>
        <Text style={styles.nameFont}>{DetailInfo.plantName}</Text>
      </View>
      <View style={styles.DesContainer}>
        <Text style={styles.desFont}>{DetailInfo.plantDescription}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: ScreenHeight * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF7F2',
  },
  ImageContainer: {
    marginTop: 5,
  },
  nameContatiner: {
    marginTop: 5,
  },
  DesContainer: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: ScreenWidth * 0.88,
  },
  DetailImage: {
    width: ScreenWidth * 0.5,
    height: ScreenWidth * 0.5,
    borderRadius: 20,
  },
  nameFont: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: 25,
  },
  desFont: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: 15,
  },
});
export default HerbInfo;
