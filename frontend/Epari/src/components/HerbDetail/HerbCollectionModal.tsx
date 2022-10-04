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
        <View style={styles.topContainer}>
          <View style={styles.ProfileContainer}>
            <Image
              source={require('Epari/src/asset/temp/avatar-1.png')}
              style={styles.userProfile}
            />
          </View>
          <View style={styles.TitleContainer}>
            <Text style={styles.TitleFont}>{collectionItem.collectTitle}</Text>
            <View style={styles.DateContainer}>
              <Text style={styles.DateFont}>{collectionItem.collectDate}</Text>
            </View>
          </View>
        </View>
        <View style={styles.CenterContainer}>
          <View style={styles.PlaceContainer}>
            <View>
              <Ionicons name="location-outline" size={24} color="#11015" />
            </View>
            <View style={styles.place}>
              <Text style={styles.PlaceFont}>
                {collectionItem.collectPlace}
              </Text>
            </View>
          </View>
          <View style={styles.ImageContainer}>
            <Image
              source={require('Epari/src/asset/temp/image7.png')}
              style={styles.ModalImage}
            />
          </View>
          <View style={styles.ContentContainer}>
            <ScrollView>
              <Text style={styles.ContentFont}>
                {collectionItem.collectContent}
              </Text>
            </ScrollView>
          </View>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.closeButton}>
            <Ionicons name="md-close" size={30} color="#474747" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  ModalContainer: {
    width: ScreenWidth * 0.8,
    height: ScreenHeight * 0.65,
    alignSelf: 'center',
    backgroundColor: '#F6EDD9',
    borderRadius: 15,
    borderWidth: 4,
  },
  topContainer: {
    flexDirection: 'row',
  },
  ProfileContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: ScreenWidth * 0.03,
    marginTop: ScreenWidth * 0.03,
  },
  userProfile: {
    width: ScreenWidth * 0.1,
    height: ScreenWidth * 0.1,
  },
  TitleContainer: {
    width: ScreenWidth * 0.6,
    height: 30,
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 15,
  },
  TitleFont: {
    fontFamily: 'NeoDGM-Regular',
    fontSize: 21,
    color: '#110105',
  },
  DateContainer: {
    margin: 6,
    borderRadius: 8,
  },
  DateFont: {
    fontFamily: 'NeoDGM-Regular',
  },
  CenterContainer: {},
  PlaceContainer: {
    flexDirection: 'row',
    margin: 10,
    marginLeft: 30,
    marginBottom: 5,
  },
  PlaceFont: {
    fontFamily: 'NeoDGM-Regular',
  },
  place: {
    justifyContent: 'center',
  },
  ImageContainer: {
    alignSelf: 'center',
    margin: 0,
  },
  ModalImage: {
    width: ScreenWidth * 0.67,
    height: ScreenWidth * 0.67,
    borderRadius: 15,
  },
  ContentContainer: {
    alignItems: 'center',
    height: ScreenHeight * 0.14,
    padding: 7,
    borderRadius: 8,
    margin: 7,
    marginBottom: 0,
  },
  ContentFont: {
    fontFamily: 'NeoDGM-Regular',
    color: '#110105',
    fontSize: 15,
  },
  closeButton: {
    alignSelf: 'center',
  },
});
export default HerbCollectionModal;
