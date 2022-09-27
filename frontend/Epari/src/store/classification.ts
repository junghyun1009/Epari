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
  plantId: number;
  plantName: string;
  detailPictureUrl: string;
};

export const capturedMainImage = atom<CapturedImageType[]>({
  key: 'capturedMainImage',
  default: [],
});

export const capturedSubImage = atom<CapturedImageType[]>({
  key: 'capturedSubImage',
  default: [],
});
