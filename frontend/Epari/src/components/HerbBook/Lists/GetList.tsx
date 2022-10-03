import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {AppStackParamList} from '../../../types';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ListItem from './ListItem';
import {useQuery} from '@tanstack/react-query';
import {QueryKeys, restFetcher} from '../../../queryClient';
import {useRecoilValue} from 'recoil';
import {userTokenState} from '../../../store/user';

export type GetListScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'GetList'
>;

const GetList: React.FC<GetListScreenProps> = ({navigation}) => {
  const userToken = useRecoilValue(userTokenState);
  const data = useQuery([QueryKeys.HERBLIST], async () => {
    return await restFetcher({
      method: 'GET',
      path: 'https://dummyjson.com/products',
      Token: userToken,
    });
  });
  console.log(userToken);
  console.log(data);
  const temp_array: any = [];
  API_Response.map((item, i) =>
    temp_array.push({
      id: item.plantId,
      imageSrc: imageList[i],
      plantName: item.plantName,
      collectionCnt: item.collectionCnt,
    }),
  );
  console.log(temp_array);
  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        {temp_array.map((item: any) => {
          if (item.collectionCnt > 0) {
            return (
              <ListItem
                id={item.imageSrc}
                navigation={navigation}
                key={item.id}
                plantName={item.plantName}
                count={item.collectionCnt}
              />
            );
          }
        })}
      </View>
    </ScrollView>
  );
};

export default GetList;

// let ScreenWidth = Dimensions.get('window').width;
// let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF7F2',
  },
  container: {
    display: 'flex',

    flexWrap: 'wrap',
    flexDirection: 'row',
    overflow: 'scroll',
    justifyContent: 'center',
    backgroundColor: '#FFF7F2',
  },
});

const imageList = [
  require('Epari/src/asset/activeIcons/active_0010.png'),
  require('Epari/src/asset/activeIcons/active_0020.png'),
  require('Epari/src/asset/activeIcons/active_0030.png'),
  require('Epari/src/asset/activeIcons/active_0040.png'),
  require('Epari/src/asset/activeIcons/active_0050.png'),
  require('Epari/src/asset/activeIcons/active_0060.png'),
  require('Epari/src/asset/activeIcons/active_0070.png'),
  require('Epari/src/asset/activeIcons/active_0080.png'),
  require('Epari/src/asset/activeIcons/active_0090.png'),
  require('Epari/src/asset/activeIcons/active_0100.png'),
  require('Epari/src/asset/activeIcons/active_0110.png'),
  require('Epari/src/asset/activeIcons/active_0120.png'),
  require('Epari/src/asset/activeIcons/active_0130.png'),
  require('Epari/src/asset/activeIcons/active_0140.png'),
  require('Epari/src/asset/activeIcons/active_0150.png'),
  require('Epari/src/asset/activeIcons/active_0160.png'),
  require('Epari/src/asset/activeIcons/active_0170.png'),
  require('Epari/src/asset/activeIcons/active_0180.png'),
  require('Epari/src/asset/activeIcons/active_0190.png'),
  require('Epari/src/asset/activeIcons/active_0200.png'),
  require('Epari/src/asset/activeIcons/active_0210.png'),
  require('Epari/src/asset/activeIcons/active_0220.png'),
  require('Epari/src/asset/activeIcons/active_0230.png'),
  require('Epari/src/asset/activeIcons/active_0240.png'),
  require('Epari/src/asset/activeIcons/active_0250.png'),
  require('Epari/src/asset/activeIcons/active_0260.png'),
  require('Epari/src/asset/activeIcons/active_0270.png'),
  require('Epari/src/asset/activeIcons/active_0280.png'),
  require('Epari/src/asset/activeIcons/active_0290.png'),
  require('Epari/src/asset/activeIcons/active_0300.png'),
  require('Epari/src/asset/activeIcons/active_0310.png'),
  require('Epari/src/asset/activeIcons/active_0320.png'),
  require('Epari/src/asset/activeIcons/active_0330.png'),
  require('Epari/src/asset/activeIcons/active_0340.png'),
  require('Epari/src/asset/activeIcons/active_0350.png'),
  require('Epari/src/asset/activeIcons/active_0360.png'),
  require('Epari/src/asset/activeIcons/active_0370.png'),
  require('Epari/src/asset/activeIcons/active_0380.png'),
  require('Epari/src/asset/activeIcons/active_0390.png'),
  require('Epari/src/asset/activeIcons/active_0400.png'),
  require('Epari/src/asset/activeIcons/active_0410.png'),
  require('Epari/src/asset/activeIcons/active_0420.png'),
  require('Epari/src/asset/activeIcons/active_0430.png'),
  require('Epari/src/asset/activeIcons/active_0440.png'),
  require('Epari/src/asset/activeIcons/active_0450.png'),
  require('Epari/src/asset/activeIcons/active_0460.png'),
  require('Epari/src/asset/activeIcons/active_0470.png'),
  require('Epari/src/asset/activeIcons/active_0480.png'),
  require('Epari/src/asset/activeIcons/active_0490.png'),
  require('Epari/src/asset/activeIcons/active_0500.png'),
  require('Epari/src/asset/activeIcons/active_0510.png'),
  require('Epari/src/asset/activeIcons/active_0520.png'),
  require('Epari/src/asset/activeIcons/active_0530.png'),
  require('Epari/src/asset/activeIcons/active_0540.png'),
  require('Epari/src/asset/activeIcons/active_0550.png'),
  require('Epari/src/asset/activeIcons/active_0560.png'),
  require('Epari/src/asset/activeIcons/active_0570.png'),
  require('Epari/src/asset/activeIcons/active_0580.png'),
  require('Epari/src/asset/activeIcons/active_0590.png'),
  require('Epari/src/asset/activeIcons/active_0600.png'),
  require('Epari/src/asset/activeIcons/active_0610.png'),
  require('Epari/src/asset/activeIcons/active_0620.png'),
  require('Epari/src/asset/activeIcons/active_0630.png'),
  require('Epari/src/asset/activeIcons/active_0640.png'),
  require('Epari/src/asset/activeIcons/active_0650.png'),
  require('Epari/src/asset/activeIcons/active_0660.png'),
  require('Epari/src/asset/activeIcons/active_0670.png'),
];

const API_Response = [
  {
    plantId: 1,
    plantName: '분홍 달맞이꽃',
    collectionCnt: 1,
  },
  {
    plantId: 2,
    plantName: '슬리퍼 난초',
    collectionCnt: 1,
  },
  {
    plantId: 3,
    plantName: '스위트피',
    collectionCnt: 0,
  },
  {
    plantId: 4,
    plantName: '금잔화',
    collectionCnt: 0,
  },
  {
    plantId: 5,
    plantName: '참나리',
    collectionCnt: 0,
  },
  {
    plantId: 6,
    plantName: '흰색 호접란',
    collectionCnt: 0,
  },
  {
    plantId: 7,
    plantName: '극락조화',
    collectionCnt: 0,
  },
  {
    plantId: 8,
    plantName: '절굿대',
    collectionCnt: 0,
  },
  {
    plantId: 9,
    plantName: '관동화',
    collectionCnt: 0,
  },
  {
    plantId: 10,
    plantName: '용왕꽃',
    collectionCnt: 0,
  },
  {
    plantId: 11,
    plantName: '노랑꽃창포',
    collectionCnt: 1,
  },
  {
    plantId: 12,
    plantName: '보라 에키네시아',
    collectionCnt: 1,
  },
  {
    plantId: 13,
    plantName: '알스트로메리아',
    collectionCnt: 2,
  },
  {
    plantId: 14,
    plantName: '도라지',
    collectionCnt: 0,
  },
  {
    plantId: 15,
    plantName: '글로리오사',
    collectionCnt: 0,
  },
  {
    plantId: 16,
    plantName: '체꽃',
    collectionCnt: 0,
  },
  {
    plantId: 17,
    plantName: '붉은꽃생강',
    collectionCnt: 0,
  },
  {
    plantId: 18,
    plantName: '무스카리',
    collectionCnt: 0,
  },
  {
    plantId: 19,
    plantName: '개양귀비',
    collectionCnt: 0,
  },
  {
    plantId: 20,
    plantName: '수염패랭이꽃',
    collectionCnt: 0,
  },
  {
    plantId: 21,
    plantName: '카네이션',
    collectionCnt: 0,
  },
  {
    plantId: 22,
    plantName: '풀협죽도',
    collectionCnt: 0,
  },
  {
    plantId: 23,
    plantName: '니겔라',
    collectionCnt: 0,
  },
  {
    plantId: 24,
    plantName: '코스모스',
    collectionCnt: 0,
  },
  {
    plantId: 25,
    plantName: '아스트란티아',
    collectionCnt: 0,
  },
  {
    plantId: 26,
    plantName: '렌텐로즈',
    collectionCnt: 0,
  },
  {
    plantId: 27,
    plantName: '포인세티아',
    collectionCnt: 0,
  },
  {
    plantId: 28,
    plantName: '천수국',
    collectionCnt: 0,
  },
  {
    plantId: 29,
    plantName: '버터컵',
    collectionCnt: 0,
  },
  {
    plantId: 30,
    plantName: '불란서국화',
    collectionCnt: 0,
  },
  {
    plantId: 31,
    plantName: '민들레',
    collectionCnt: 1,
  },
  {
    plantId: 32,
    plantName: '해바라기',
    collectionCnt: 1,
  },
  {
    plantId: 33,
    plantName: '나비꽃',
    collectionCnt: 0,
  },
  {
    plantId: 34,
    plantName: '대상화',
    collectionCnt: 0,
  },
  {
    plantId: 35,
    plantName: '블랙 아이드 수잔',
    collectionCnt: 0,
  },
  {
    plantId: 36,
    plantName: '샤프란',
    collectionCnt: 1,
  },
  {
    plantId: 37,
    plantName: '바람꽃',
    collectionCnt: 0,
  },
  {
    plantId: 38,
    plantName: '가자니아',
    collectionCnt: 0,
  },
  {
    plantId: 39,
    plantName: '수련',
    collectionCnt: 1,
  },
  {
    plantId: 40,
    plantName: '장미',
    collectionCnt: 1,
  },
  {
    plantId: 41,
    plantName: '나팔꽃',
    collectionCnt: 1,
  },
  {
    plantId: 42,
    plantName: '시계초',
    collectionCnt: 0,
  },
  {
    plantId: 43,
    plantName: '연꽃',
    collectionCnt: 0,
  },
  {
    plantId: 44,
    plantName: '뻐꾹나리',
    collectionCnt: 0,
  },
  {
    plantId: 45,
    plantName: '안수리움',
    collectionCnt: 0,
  },
  {
    plantId: 46,
    plantName: '플루메리아',
    collectionCnt: 0,
  },
  {
    plantId: 47,
    plantName: '무궁화',
    collectionCnt: 0,
  },
  {
    plantId: 48,
    plantName: '아데니움',
    collectionCnt: 0,
  },
  {
    plantId: 49,
    plantName: '모나르다',
    collectionCnt: 0,
  },
  {
    plantId: 50,
    plantName: '부겐빌레아',
    collectionCnt: 0,
  },
  {
    plantId: 51,
    plantName: '동백',
    collectionCnt: 0,
  },
  {
    plantId: 52,
    plantName: '목나팔',
    collectionCnt: 0,
  },
  {
    plantId: 53,
    plantName: '천인국',
    collectionCnt: 0,
  },
  {
    plantId: 54,
    plantName: '범부채',
    collectionCnt: 0,
  },
  {
    plantId: 55,
    plantName: '칡',
    collectionCnt: 0,
  },
  {
    plantId: 56,
    plantName: '더덕',
    collectionCnt: 0,
  },
  {
    plantId: 57,
    plantName: '참당귀',
    collectionCnt: 0,
  },
  {
    plantId: 58,
    plantName: '엉겅퀴',
    collectionCnt: 0,
  },
  {
    plantId: 59,
    plantName: '독활',
    collectionCnt: 0,
  },
  {
    plantId: 60,
    plantName: '하수오',
    collectionCnt: 0,
  },
  {
    plantId: 61,
    plantName: '창포',
    collectionCnt: 0,
  },
  {
    plantId: 62,
    plantName: '우엉',
    collectionCnt: 1,
  },
  {
    plantId: 63,
    plantName: '익모초',
    collectionCnt: 0,
  },
  {
    plantId: 64,
    plantName: '인동덩굴',
    collectionCnt: 0,
  },
  {
    plantId: 65,
    plantName: '천궁',
    collectionCnt: 0,
  },
  {
    plantId: 66,
    plantName: '꽃향유',
    collectionCnt: 0,
  },
  {
    plantId: 67,
    plantName: '인삼',
    collectionCnt: 1,
  },
];
