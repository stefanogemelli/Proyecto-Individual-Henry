import {
  GET_ALL_COUNTRIES_API,
  FILTER_COUNTRIES,
  SORT_COUNTRIES,
  SET_CURRENT_PAGE,
  GET_COUNTRIES_API_BY_NAME,
  CLEAR_FILTERS,
} from "./actions"; // FILTER_BY_NAME

const initialState = {
  // ...
  allCountries: [],
  filteredCountries: [],
  countriesKeysNames: {},
  filters: {},
  sorts: {},
  currentPage: 1,
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES_API:
      const countriesKeyName = {};
      payload.forEach((country) => {
        countriesKeyName[country.id] = country.name;
      });
      return {
        ...state,
        allCountries: [...payload],
        filteredCountries: [...payload],
        countriesKeysNames: { ...countriesKeyName },
        currentPage: 1,
      };
    case GET_COUNTRIES_API_BY_NAME: // => => => FALTA VOLVER A APLICAR FIILTROS importante!
      const newAllCountries = payload;
      let newFCountries = filterApply(payload, { ...state.filters });

      return {
        ...state,
        allCountries: newAllCountries,
        filteredCountries: newFCountries,
        currentPage: 1,
      };
    case FILTER_COUNTRIES: //payload = {filter:"name /continent /activity",value:"value"}
      let newFilteredCountries = [...state.allCountries];
      const filtersToApply = { ...state.filters };
      const { filter, value } = payload;
      if (value === "") {
        delete filtersToApply[filter];
      } else {
        filtersToApply[filter] = value; //{continent:"on",}
      }
      newFilteredCountries = filterApply(newFilteredCountries, filtersToApply);
      return {
        ...state,
        filteredCountries: newFilteredCountries,
        filters: { ...filtersToApply },
        currentPage: 1,
      };

    case SORT_COUNTRIES: //payload = {sort:"name /population",value:"ascendent"}
      return {
        ...state,
        allCountries: [...state.allCountries].sort((a, b) => {
          if (payload.value === "Ascendente") {
            if (a[payload.sort] > b[payload.sort]) {
              return 1;
            } else {
              return -1;
            }
          } else {
            if (a[payload.sort] > b[payload.sort]) {
              return -1;
            } else {
              return 1;
            }
          }
        }), // REVISAR REVISAR REVISAR REVISAR REVISAR REVISAR REVISAR REVISAR REVISAR REVISAR
        filteredCountries: [...state.filteredCountries].sort((a, b) => {
          if (payload.value === "Ascendente") {
            if (a[payload.sort] > b[payload.sort]) {
              return 1;
            } else {
              return -1;
            }
          } else {
            if (a[payload.sort] > b[payload.sort]) {
              return -1;
            } else {
              return 1;
            }
          }
        }),
        sorts: { [payload.sort]: payload.value },
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    //CLEAR_FILTERS
    case CLEAR_FILTERS:
      return {
        ...state,
        filteredCountries: [...state.allCountries],
        filters: {},
      };
    default:
      return { ...state };
  }
};

function filterApply(countries, filtersToApply) {
  let filteredCountries = countries;
  if (!!filtersToApply.continent) {
    filteredCountries = filteredCountries.filter(
      (c) => c.continent === filtersToApply.continent
    );
  }
  if (!!filtersToApply.activities) {
    filteredCountries = filteredCountries.filter((c) => {
      for (const a of c.activities) {
        if (a.name === filtersToApply.activities) return true;
      }
      return false;
    });
  }
  return filteredCountries;
}
