export const GET_ALL_COUNTRIES_API = "GET_ALL_COUNTRIES_API";
export const FILTER_COUNTRIES = "FILTER";
export const SORT_COUNTRIES = "SORT_COUNTRIES";

export const getAllCountriesApi = () => async (dispatch) => {
  try {
    const data = await fetch("http://localhost:3001/countries").then((data) =>
      data.json()
    );
    return dispatch({
      type: GET_ALL_COUNTRIES_API,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const filterCountries = (payload) => {
  //  payload = {filter:"name /continent /activities",value:"value"}
  return {
    type: FILTER_COUNTRIES,
    payload: payload,
  };
};

export const sortCountries = (payload) => {
  //  payload = {sort:"name /population",value:"ascendent"}
  return {
    type: SORT_COUNTRIES,
    payload: payload,
  };
};
