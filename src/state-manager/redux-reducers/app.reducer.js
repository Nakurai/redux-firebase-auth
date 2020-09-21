const defaultState = {
  appName: "React - Firebase auth class",
};

// action is an object, and always has a "type" attribute
const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "TEST":
      return state;
    default:
      return state;
  }
};

export default appReducer;
