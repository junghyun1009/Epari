import {atom} from 'recoil';

export type GoogleUserInform = {
  displayName: string;
  email: string;
  name: string;
  phoneNumber: string;
  photoURL: string;
};

export const picturedImage = atom<GoogleUserInform[]>({
  key: 'picturedImage',
  default: [],
});
