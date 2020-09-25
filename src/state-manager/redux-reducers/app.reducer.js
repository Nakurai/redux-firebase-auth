import { ACTION_TYPES } from "../redux-actions";

const defaultState = {
  appName: "React - Firebase auth class",
};

// action is an object, and always has a "type" attribute
const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_NAME_APP:
      return { ...state, appName: action.payload.newName };
    default:
      return state;
  }
};

export default appReducer;
