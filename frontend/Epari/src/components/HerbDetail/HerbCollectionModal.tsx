import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';

type HerbCollectionModalProps = {
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
  modalVisible: boolean;
  setModalVisible: any;
};

const HerbCollectionModal: React.FC<HerbCollectionModalProps> = ({
  collectionItem,
  modalVisible,
  setModalVisible,
}) => {
  return (
    <Modal
      isVisible={modalVisible}
      onBackButtonPress={() => setModalVisible(!modalVisible)}
      onBackdropPress={() => setModalVisible(!modalVisible)}
      useNativeDriver={true}>
      <View style={styles.ModalContainer}>
        <Image
          source={{
            uri: 'https://dolarge.s3.ap-northeast-2.amazonaws.com/0010.jpg',
          }}
          style={styles.ModalImage}
        />
        <View style={styles.TitleContainer}>
          <Text style={styles.TitleFont}>
            제목 : {collectionItem.collectTitle}
          </Text>
        </View>
        <ScrollView>
          <View style={styles.ContentContainer}>
            <Text style={styles.ContentFont}>
              내용 : {collectionItem.collectContent}
            </Text>
          </View>
        </ScrollView>
        <View style={styles.DateContainer}>
          <Text style={styles.DateFont}>
            등록날짜 : {collectionItem.collectDate}
          </Text>
        </View>
        <View style={styles.PlaceContainer}>
          <Text style={styles.PlaceFont}>
            장소 : {collectionItem.collectPlace}
          </Text>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Ionicons name="md-close" size={50} color="#110105" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  ModalContainer: {
    width: ScreenWidth * 0.8,
    height: ScreenHeight * 0.8,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF7F2',
    borderRadius: 15,
  },
  ModalImage: {
    width: ScreenWidth * 0.6,
    height: ScreenWidth * 0.6,
    margin: ScreenWidth * 0.03,
    borderRadius: 15,
  },

  TitleContainer: {
    backgroundColor: '#F6EDD9',
    width: ScreenWidth * 0.72,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    margin: 7,
  },
  TitleFont: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: 21,
  },
  DateContainer: {
    backgroundColor: '#F6EDD9',
    width: ScreenWidth * 0.72,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    margin: 7,
  },
  DateFont: {
    fontFamily: 'NeoDGM-Regular',
  },
  ContentContainer: {
    backgroundColor: '#F6EDD9',
    width: ScreenWidth * 0.72,
    height: ScreenHeight * 0.24,
    alignItems: 'center',
    padding: 7,
    borderRadius: 8,
    margin: 7,
  },
  ContentFont: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: 15,
  },
  PlaceContainer: {
    backgroundColor: '#F6EDD9',
    width: ScreenWidth * 0.72,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    margin: 7,
  },
  PlaceFont: {
    fontFamily: 'NeoDGM-Regular',
  },
});
export default HerbCollectionModal;
