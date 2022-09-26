import {atom} from 'recoil';

export type PicturedImageType = {
  uri: string;
  type: string;
  name: string;
};

export const picturedImage = atom<PicturedImageType[]>({
  key: 'picturedImage',
  default: [],
});

export type CapturedImageType = {
  plantName: string;
  detailPictureUrl: string;
};

export const capturedImage = atom<CapturedImageType[]>({
  key: 'capturedImage',
  default: [],
});
