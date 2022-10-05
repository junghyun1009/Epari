import React from 'react';
import {Text} from 'react-native';

type AppTextProps = {
  children?: React.ReactNode;
  props?: any;
  style?: any;
};

const AppText: React.FC<AppTextProps> = ({props}) => {
  return (
    <Text {...props} style={{...props.style, fontFamily: 'NeoDGM-Regular'}}>
      {props.children}
    </Text>
  );
};

export default AppText;
