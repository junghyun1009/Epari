import React from 'react';
import {View, Text, Image} from 'react-native';

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
  return (
    <View>
      <Image
        source={{
          uri: collectionItem.collectPictureUrl,
        }}
      />
      <Text>{collectionItem.collectTitle}</Text>
    </View>
  );
};

export default HerbCollectionItem;
