import firebase from "../firebase";

export const ACTION_TYPES = {
  SET_AUTH_DATA: "SET_AUTH_DATA",
};

const onAuthChanged = () => {
  return async (dispatch) => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        dispatch({ type: ACTION_TYPES.SET_AUTH_DATA, payload: user });
      }
    });
  };
};

const signup = (email, password) => {
  return async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error.message);
    }
  };
};

const signin = (email, password) => {
  return async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  };
};

export const actions = { signup, onAuthChanged, signin };
