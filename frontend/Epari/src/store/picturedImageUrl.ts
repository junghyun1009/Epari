import {atom} from 'recoil';

export const pictureImageUrl = atom<string>({
  key: 'picturedImageState',
  default: '',
});
