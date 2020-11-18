import { ACTION_TYPES } from "../redux-actions";

const defaultState = {
  data: null,
};

// action is an object, and always has a "type" attribute
const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_AUTH_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default authReducer;
