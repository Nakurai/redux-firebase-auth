import { ACTION_TYPES } from "../redux-actions";

const defaultState = {
  house: "You are not a wizard yet",
};

// action is an object, and always has a "type" attribute
const magicReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SORTING_HAT:
      return { ...state, house: action.payload };
    default:
      return state;
  }
};

export default magicReducer;
