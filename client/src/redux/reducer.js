import { CREATE_ACTIVITY, GET_ALL_COUNTRIES_API } from "./actions";

const initialState = {
  // ...
  allCountries: [],
  filteredCountries: [],
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES_API:
      return {
        ...state,
        allCountries: [...payload],
      };
    // case CREATE_ACTIVITY: return {

    // }

    default:
      return { ...state };
  }
};
