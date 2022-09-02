import axios from 'axios';

export const signUp = async (email, password) => {
  try {
    const result = await axios({
      method: 'post',
      url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_KEY}`,
      data: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return result;
  } catch ({
    response: {
      data: { error },
    },
  }) {
    console.log('error', error);
    return error;
  }
};

export const signIn = async (email, password) => {
  try {
    const result = axios({
      method: 'post',
      url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_KEY}`,
      data: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return result;
  } catch ({
    response: {
      data: { error },
    },
  }) {
    console.log('error', error);

    return error;
  }
};

export const setSessionInfo = (
  { data: { expiresIn, idToken } },
  localStorage
) => {
  const expireTime = Date.now() + parseInt(expiresIn);
  console.log(expireTime, idToken);

  localStorage.setItem('expireTime', expireTime);
  localStorage.setItem('idToken', JSON.stringify(idToken));
};

export const checkLoginSession = async () => {
  const expireTime = localStorage.getItem('expireTime');
  if (expireTime < Date.now()) {
    return true;
  } else {
    localStorage.removeItem('expireTime');
    localStorage.removeItem('idToken');

    return false;
  }
};

// export const
