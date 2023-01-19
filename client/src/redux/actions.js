export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const GET_ALL_COUNTRIES_API = "GET_ALL_COUNTRIES_API";

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
