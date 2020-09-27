import api from "../api";

export const ACTION_TYPES = {
  SORTING_HAT: "SORTING_HAT",
};

const sortingHat = () => {
  return async (dispatch) => {
    const house = await api.potter.sortingHat();
    dispatch({
      type: ACTION_TYPES.SORTING_HAT,
      payload: house || "still not a wizard",
    });
  };
};

export const actions = { sortingHat };
