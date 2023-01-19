import { GET_ALL_COUNTRIES_API } from "./actions";

const initialState = {
  // ...
  allCountries: [],
  countriesKeysNames: {},
  filteredCountries: [],
  filters: {},
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES_API:
      const countriesToSet = {};
      payload.forEach((country) => {
        countriesToSet[country.id] = country.name;
      });
      return {
        ...state,
        allCountries: [...payload],
        countriesKeysNames: { ...countriesToSet },
      };

    default:
      return { ...state };
  }
};
