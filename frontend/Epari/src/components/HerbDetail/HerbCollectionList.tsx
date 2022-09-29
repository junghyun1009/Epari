import React from 'react';
import {View} from 'react-native';
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
    <View>
      <View>
        <HerbCollectionItem collectionItem={collection[0]} />
      </View>
    </View>
  );
};

export default HerbCollectionList;
