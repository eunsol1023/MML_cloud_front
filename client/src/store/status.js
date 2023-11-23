import { atom } from 'recoil';

export const signupState = atom({
  key: 'signupState', // 고유한 키
  default: {
    username : '',
    password : '',
    gender : '',
    age_range : '',
    genre1 : '',
    genre2 : '',
    genre3: '',
    genre4 : '',
    genre5 : '',
    artist1 : '',
    artist2 : '',
    artist3 : '',
    artist4 : '',
    artist5 : '',
  },
});
