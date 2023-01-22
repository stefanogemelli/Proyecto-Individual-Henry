import { GET_ALL_COUNTRIES_API, FILTER_COUNTRIES } from "./actions"; // FILTER_BY_NAME

const initialState = {
  // ...
  allCountries: [],
  countriesKeysNames: {},
  filteredCountries: [],
  filters: {
    //  name: false, //si la prop esta en false => aplicar filtro sobre filteredCountries y hacer toggle
    //  continent: false, //si la prop esta en true => aplicar todos los filtros(y sort) menos payload y hacer toggle
    //  activities: false, //extra... => false == undefined == noSeteada (delete filters[key])
  },
  sorts: {
    type: "",
    value: "", // ascendente / descendente
    //aplicar siempre sobre filtered y all(mas facil al no tener que re-aplicar al cambiar filtros)
  },
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES_API:
      console.log(payload[0]);
      const countriesKeyName = {};
      payload.forEach((country) => {
        countriesKeyName[country.id] = country.name;
      });
      return {
        ...state,
        allCountries: [...payload],
        filteredCountries: [...payload],
        countriesKeysNames: { ...countriesKeyName },
      };
    case FILTER_COUNTRIES: //payload = {filter:"name /continent /activity",value:"value"}
      // leer si existe el filtro entrante, caso true => aplicar todos sobre allCountries nuevamente
      //    caso false => aplicar filtro entrante sobre filteredCountries
      let newFilteredCountries = [...state.allCountries];
      console.log("recien cargado de all", newFilteredCountries);
      const stateFilters = { ...state.filters };
      const { filter, value } = payload;
      if (value === "") {
        delete stateFilters[filter];
        console.log(stateFilters[filter]);
        console.log(stateFilters);
      } else {
        stateFilters[filter] = value;
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
      console.log(newFilteredCountries);
      return {
        ...state,
        filteredCountries: newFilteredCountries,
        filters: { ...stateFilters },
      };

    default:
      return { ...state };
  }
};
