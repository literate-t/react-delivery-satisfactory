import { atom, selector } from 'recoil';

export const signinState = atom({
  key: 'SigninState',
  default: {
    expireTime: 0,
    idToken: '',
  },
});

export const checkSinginState = selector({
  key: 'CheckSinginState',
  get: ({ get }) => get(signinState),
  set: ({ set }, newValue) => {
    const { expireTime, idToken } = newValue;

    console.log(expireTime, idToken);

    localStorage.setItem('expireTime', expireTime + Date.now());
    localStorage.setItem('idToken', idToken);

    set(signinState, { expireTime, idToken });
  },
});
