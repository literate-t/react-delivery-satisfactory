import { atom, selector } from 'recoil';

const localStorageEffect =
  (expireTimeKey, idTokenKey) =>
  ({ setSelf, onSet }) => {
    const time = parseInt(localStorage.getItem(expireTimeKey));
    const token = localStorage.getItem(idTokenKey);
    if (time != null && token != null) {
      console.log('null');
      setSelf({ expireTime: time, idToken: token });
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localStorage.removeItem(expireTimeKey);
        localStorage.removeItem(idTokenKey);
      } else {
        console.log(newValue);
        const { expireTime, idToken } = newValue;
        localStorage.setItem(expireTimeKey, expireTime);
        localStorage.setItem(idTokenKey, idToken);
      }
    });
  };

export const signinState = atom({
  key: 'SigninState',
  default: {
    expireTime: 0,
    idToken: '',
  },
  effects: [localStorageEffect('expireTime', 'idToken')],
});

/**
const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  }; 

 export const currentUserIDState = atom({
  key: 'CurrentUserID',
  default: 1,
  effects: [localStorageEffect('current_user')],
});
 */

// export const checkSinginState = selector({
//   key: 'CheckSinginState',
//   get: ({ get }) => get(signinState),
//   set: ({ set }, newValue) => {
//     const { expireTime, idToken } = newValue;

//     console.log(expireTime, idToken);

//     localStorage.setItem('expireTime', expireTime + Date.now());
//     localStorage.setItem('idToken', idToken);

//     set(signinState, { expireTime, idToken });
//   },
// });
