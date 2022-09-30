import {atom} from 'recoil';
import {HerbType} from '../graphql/herb';

export const getHerbList = atom<HerbType[]>({
  key: 'getHerbState',
  default: [],
});
