import axios from "axios";
export const getActivitiesFromApi = () => {
  return axios
    .get("http://localhost:3001/activities/all")
    .then((data) => data.data);
};
