import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '../types';
import {
  HerbCollectionList,
  HerbDetailHeader,
  HerbInfo,
} from '../components/HerbDetail';

export type DetailScreenProps = StackScreenProps<
  AppStackParamList,
  'HerbDetail'
>;

const HerbDetail: React.FC<DetailScreenProps> = ({
  route,
  navigation,
}: DetailScreenProps) => {
  const id = route.params.id;

  const DetailInfo = {
    plantName: '도라지',
    detailPictureUrl: require('Epari/src/asset/icons/Detail_example.jpg'),
    plantDescription:
      '일본, 한국, 중국에 분포하며 그 외의 지역은 잡초취급. 자생종은 꽃이 지고 그 아래에 씨방이 생기는데, 현재 재배하고 있는 품종은 모두 이것을 채취하여 기르기 시작한 것이다. 뿌리 약초. 길경이라고도 한다. 보통 추운 지방에서 잘 자라는데, 한국, 일본[1] 및 중국 등 동북아시아 지역에서 흔히 자란다. 껍질을 벗기고 물에 불려서 쓴맛을 제거한 뒤 나물로 무치거나 삶아먹는다. 추석이나 설날 열에 아홉은 먹는 나물 무침에 콩나물, 고사리 등과 함께 도라지 무침이 있다. 그리고 약용으로도 쓰인다. 야생 도라지꽃은 보통 보라색이 많고 흰색은 매우 드물지만 재배 도라지꽃은 흰색이 대부분이다. 원예용으로 개량된 분홍색 도라지도 있다. 언뜻 보면 매발톱과 유사해서 착각하는 사람도 있는 듯. 2021년 3월 국내 연구진이 도라지에서 코로나 치료성분을 발견했다는 보도가 나왔지만, 과연 실용성이 있을지는 모른다',
    collection: [
      {
        collectId: 1,
        collectPictureUrl:
          'http://www.hortitimes.com/news/photo/first/201606/img_6009_1.jpg',
        collectDate: '2022-09-28',
        collectTitle: '도라지 짱 좋아',
        collectContent: '청계산에서 득템한 도라지 ^^',
        collectPlace: '강원도 양양시',
        plantId: 1,
        userId: '1',
        locationId: '20',
      },
      {
        collectId: 2,
        collectPictureUrl:
          'http://www.hortitimes.com/news/photo/first/201606/img_6009_1.jpg',
        collectDate: '2022-09-28',
        collectTitle: '도라지 짱 좋아',
        collectContent: '청계산에서 득템한 도라지 ^^',
        collectPlace: '강원도 양양시',
        plantId: 1,
        userId: '1',
        locationId: '20',
      },
      {
        collectId: 3,
        collectPictureUrl:
          'http://www.hortitimes.com/news/photo/first/201606/img_6009_1.jpg',
        collectDate: '2022-09-28',
        collectTitle: '도라지 짱 좋아',
        collectContent: '청계산에서 득템한 도라지 ^^',
        collectPlace: '강원도 양양시',
        plantId: 1,
        userId: '1',
        locationId: '20',
      },
      {
        collectId: 4,
        collectPictureUrl:
          'http://www.hortitimes.com/news/photo/first/201606/img_6009_1.jpg',
        collectDate: '2022-09-28',
        collectTitle: '도라지 짱 좋아',
        collectContent: '청계산에서 득템한 도라지 ^^',
        collectPlace: '강원도 양양시',
        plantId: 1,
        userId: '1',
        locationId: '20',
      },
      {
        collectId: 5,
        collectPictureUrl:
          'http://www.hortitimes.com/news/photo/first/201606/img_6009_1.jpg',
        collectDate: '2022-09-28',
        collectTitle: '도라지 짱 좋아',
        collectContent: '청계산에서 득템한 도라지 ^^',
        collectPlace: '강원도 양양시',
        plantId: 1,
        userId: '1',
        locationId: '20',
      },
      {
        collectId: 6,
        collectPictureUrl:
          'http://www.hortitimes.com/news/photo/first/201606/img_6009_1.jpg',
        collectDate: '2022-09-28',
        collectTitle: '도라지 짱 좋아',
        collectContent: '청계산에서 득템한 도라지 ^^',
        collectPlace: '강원도 양양시',
        plantId: 1,
        userId: '1',
        locationId: '20',
      },
      {
        collectId: 7,
        collectPictureUrl:
          'http://www.hortitimes.com/news/photo/first/201606/img_6009_1.jpg',
        collectDate: '2022-09-28',
        collectTitle: '도라지 짱 좋아',
        collectContent: '청계산에서 득템한 도라지 ^^',
        collectPlace: '강원도 양양시',
        plantId: 1,
        userId: '1',
        locationId: '20',
      },
      {
        collectId: 8,
        collectPictureUrl:
          'http://www.hortitimes.com/news/photo/first/201606/img_6009_1.jpg',
        collectDate: '2022-09-28',
        collectTitle: '도라지 짱 좋아',
        collectContent: '청계산에서 득템한 도라지 ^^',
        collectPlace: '강원도 양양시',
        plantId: 1,
        userId: '1',
        locationId: '20',
      },
      {
        collectId: 9,
        collectPictureUrl:
          'http://www.hortitimes.com/news/photo/first/201606/img_6009_1.jpg',
        collectDate: '2022-09-28',
        collectTitle: '도라지 짱 좋아',
        collectContent: '청계산에서 득템한 도라지 ^^',
        collectPlace: '강원도 양양시',
        plantId: 1,
        userId: '1',
        locationId: '20',
      },
    ],
  };
  // const {data} = useQuery<HerbDetailType>([QueryKeys.HERBDETAIL], () =>
  //   restFetcher({
  //     method: 'GET',
  //     path: '/collection',
  //   }),
  // );
  // console.log('1' + data);
  return (
    <ScrollView style={styles.background}>
      <HerbDetailHeader navigation={navigation} />
      <HerbInfo DetailInfo={DetailInfo} />
      <HerbCollectionList collection={DetailInfo.collection} />
      <View style={styles.container}>
        <Text style={styles.fontTest}>Epari Herb Detail Screenn</Text>
        {id === undefined ? null : <Text>id:{id}</Text>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFF7F2',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  fontTest: {
    fontFamily: 'NeoDGM-Regular',
  },
});
export default HerbDetail;
