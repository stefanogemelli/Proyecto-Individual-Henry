import {
  GET_ALL_COUNTRIES_API,
  FILTER_COUNTRIES,
  SORT_COUNTRIES,
  SET_CURRENT_PAGE,
  GET_COUNTRIES_API_BY_NAME,
} from "./actions"; // FILTER_BY_NAME

const initialState = {
  // ...
  allCountries: [],
  filteredCountries: [],
  countriesKeysNames: {},
  filters: {}, // { name:"on"}
  sorts: {}, // {type:value}
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
      const newFCountries = payload;
      const filters = Object.keys(state.filters);
      return {
        ...state,
        allCountries: [...payload],
        filteredCountries: [...payload],
        currentPage: 1,
      };
    case FILTER_COUNTRIES: //payload = {filter:"name /continent /activity",value:"value"}
      // leer si existe el filtro entrante, caso true => aplicar todos sobre allCountries nuevamente
      //    caso false => aplicar filtro entrante sobre filteredCountries
      let newFilteredCountries = [...state.allCountries];
      const stateFilters = { ...state.filters };
      const { filter, value } = payload;
      if (value === "") {
        delete stateFilters[filter];
      } else {
        stateFilters[filter] = value; //{continent:"on",}
      }
      // const filtersToApply = Object.keys(stateFilters);
      if (!!stateFilters.name) {
        newFilteredCountries = newFilteredCountries.filter((c) =>
          c.name.toLowerCase().includes(stateFilters.name.toLowerCase())
        );
      }
      if (!!stateFilters.continent) {
        newFilteredCountries = newFilteredCountries.filter(
          (c) => c.continent === stateFilters.continent
        );
      }
      if (!!stateFilters.activities) {
        console.log("entre a activities");
        newFilteredCountries = newFilteredCountries.filter((c) => {
          for (const a of c.activities) {
            if (a.name === stateFilters.activities) return true;
          }
          return false;
        });
      }
      return {
        ...state,
        filteredCountries: newFilteredCountries,
        filters: { ...stateFilters },
        currentPage: 1,
      };

    //SORT_COUNTRIES
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
    default:
      return { ...state };
  }
};

function filterApply() {}
