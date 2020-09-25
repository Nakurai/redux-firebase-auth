export const ACTION_TYPES = {
  CHANGE_NAME_APP: "CHANGE_NAME_APP",
};

const changeName = () => {
  return {
    type: ACTION_TYPES.CHANGE_NAME_APP,
    payload: {
      newName: "Bob",
    },
  };
};

export const actions = { changeName };
