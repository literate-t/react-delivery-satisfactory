import axios from "axios";

export const signUp = async (email, password) => {
  try {
    const result = await axios({
      method: "post",
      url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_KEY}`,
      data: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return result;
  } catch ({
    response: {
      data: { error },
    },
  }) {
    console.log("error", error);
    return error;
  }
};
