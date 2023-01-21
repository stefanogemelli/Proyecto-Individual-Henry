import { GET_ALL_COUNTRIES_API, SEARCH_BY_NAME } from "./actions";

const initialState = {
  // ...
  allCountries: [],
  countriesKeysNames: {},
  filteredCountries: [],
  filters: {
    name: false, //si la prop esta en false => aplicar filtro sobre filteredCountries y hacer toggle
    continent: false, //si la prop esta en true => aplicar todos los filtros(y sort) menos payload y hacer toggle
    season: false, //extra... => false == undefined == noSeteada (buscar delete de keys)
  },
  sorts: {
    //aplicar siempre sobre filteredCountries
    typeSort: false, // si la prop esta en false =>
    // si la prop esta en true
  },
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES_API:
      console.log(payload);
      const countriesToSet = {};
      payload.forEach((country) => {
        countriesToSet[country.id] = country.name;
      });
      return {
        ...state,
        allCountries: [...payload],
        filteredCountries: [...payload],
        countriesKeysNames: { ...countriesToSet },
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        filteredCountries: [
          ...state.allCountries.filter((country) =>
            country.name.toLowerCase().includes(payload.toLowerCase())
          ),
        ],
      };

    default:
      return { ...state };
  }
};
