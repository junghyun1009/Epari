import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
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
    <ScrollView>
      <View style={styles.container}>
        <Text>
          {collection.map(item => (
            <HerbCollectionItem collectionItem={item} key={item.collectId} />
          ))}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default HerbCollectionList;
