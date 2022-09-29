import React, {useState, set, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';
import AppText from '../AppText';

const LocationSelector: React.FC = () => {
  const [category, setCategory] = useState(1);
  const [subCategory, setSubCategory] = useState('');

  const [categories, setCategories] = useState([]);

  const subCategories = {
    1: [{key: 0, value: ''}],
  };
  // const categories = new Array();
  useEffect(() => {
    locationList();
  }, []);

  const locationList = async () => {
    console.log('????????');
    await fetch('http://127.0.0.1:8000/epari/v1/locations/location')
      .then(response => response.json())
      .then(result => {
        let tmp = 0;
        const tmpArray = [];
        result.map(item => {
          // console.log(item);
          if (tmp != item.areaId) {
            // console.log('11', categories);
            tmpArray.push({
              key: item.areaId,
              value: item.areaName,
            });
            tmp = item.areaId;
            // console.log(tmp);
          }
        });
        setCategories(tmpArray);
      })
      .catch(err => console.log);
  };
  console.log('cat', categories);

  return (
    <View style={styles.container}>
      <AppText style={styles.selectLabel}>지역: </AppText>
      <View style={styles.selectContainer}>
        <SelectList
          setSelected={setCategory}
          data={categories}
          search={false}
          placeholder={'시/도'}
          dafaultOption={{key: 1, value: '서울시'}}
          boxStyles={{
            backgroundColor: '#F6EDD9',
            // maxWidth: 150,
            // marginHorizontal: 10,
          }}
          dropdownStyles={{backgroundColor: '#F6EDD9'}}
          inputStyles={{fontFamily: 'NeoDGM-Regular'}}
          dropdownTextStyles={{fontFamily: 'NeoDGM-Regular'}}
        />
        <SelectList
          setSelected={setSubCategory}
          data={subCategories[category]}
          search={false}
          placeholder={'시/군/구'}
          dafaultOption={subCategories[category][0]}
          boxStyles={{backgroundColor: '#F6EDD9'}}
          dropdownStyles={{backgroundColor: '#F6EDD9'}}
          inputStyles={{fontFamily: 'NeoDGM-Regular'}}
          dropdownTextStyles={{fontFamily: 'NeoDGM-Regular'}}
        />
      </View>
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  selectLabel: {
    marginVertical: 6,
  },
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});

// [{"areaName": "서울시", "locationId": 1, "sigunguName": "강남구"}, {"areaName": "서울시", "locationId": 2, "sigunguName":"관악구"}]

// const categories = [
//     {key: 1, value: '서울시'},
//     {key: 1, value: '서울시'}
// ]

// const subcategories = [
//     1: [
//         {key: ?, value: '강남구'}
//     ]
// ]
