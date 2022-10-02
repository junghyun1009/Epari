import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

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
        <ScrollView>
          <Text style={styles.desFont}>{DetailInfo.plantDescription}</Text>
        </ScrollView>
      </View>
    </View>
  );
};
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,

    alignItems: 'center',
    backgroundColor: '#FFF7F2',
  },
  ImageContainer: {
    marginTop: 1,
  },
  nameContatiner: {
    marginTop: 10,
  },
  DesContainer: {
    marginTop: 10,
    height: ScreenHeight * 0.2,
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
