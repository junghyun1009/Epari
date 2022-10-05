import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import HerbCollectionModal from './HerbCollectionModal';

type HerbCollectionItemProps = {
  children?: React.ReactNode;
  collectionItem: {
    collectId: number;
    collectPictureUrl: string;
    collectDate: string;
    collectTitle: string;
    collectContent: string;
    collectPlace: string;
    plantId: number;
    userId: string;
    locationId: string;
  };
};

const HerbCollectionItem: React.FC<HerbCollectionItemProps> = ({
  collectionItem,
}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <View>
        <HerbCollectionModal
          collectionItem={collectionItem}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <Image
          source={{
            uri: collectionItem.collectPictureUrl,
          }}
          style={styles.collectionImage}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('clickTitle')}>
        <Text style={styles.TitleFont}>{collectionItem.collectTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const ScreenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  modalContainer: {
    width: ScreenWidth * 0.8,
  },
  collectionImage: {
    width: ScreenWidth * 0.23,
    height: ScreenWidth * 0.23,
    margin: ScreenWidth * 0.03,
    borderRadius: 15,
  },
  TitleFont: {
    fontFamily: 'NeoDGM-Regular',
    alignItems: 'center',
    fontSize: 15,
  },
});
export default HerbCollectionItem;
