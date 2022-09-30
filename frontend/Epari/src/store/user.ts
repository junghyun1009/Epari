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
<<<<<<< HEAD
=======

export const loginState = atom({
  key: 'loginState',
  default: false,
});
>>>>>>> 7d30fb5f5e782a7bf865387eea4065d9c39bf50b
