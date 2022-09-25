import {atom} from 'recoil';

export const picturedImage = atom<string>({
  key: 'picturedImageState',
  default: '',
});

export type CapturedImageType = {
  plantName: string;
  detailPictureUrl: string;
};

export const capturedImage = atom<CapturedImageType[]>({
  key: 'capturedImage',
  default: [],
});

// export const capturedImage = atom<string>({
//   key: 'capturedImageState',
//   default: '',
// });
