import React from 'react';
import {ScrollView, View, Text, StyleSheet, Dimensions} from 'react-native';
import HerbCollectionItem from './HerbCollectionItem';

type HerbCollectionListProps = {
  children?: React.ReactNode;
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

const HerbCollectionList: React.FC<HerbCollectionListProps> = ({
  collection,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>
          {collection.map(item => (
            <HerbCollectionItem collectionItem={item} key={item.collectId} />
          ))}
        </Text>
      </ScrollView>
    </View>
  );
};

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: ScreenWidth * 0.02,
    alignItems: 'center',
    height: ScreenHeight * 0.35,
    justifyContent: 'center',
  },
});

export default HerbCollectionList;
