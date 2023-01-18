import { CREATE_ACTIVITY } from "./actions";

const initialState = {
  // ...
  allCountries: [],
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case CREATE_ACTIVITY: return {

    // }

    default:
      return { ...state };
  }
};
