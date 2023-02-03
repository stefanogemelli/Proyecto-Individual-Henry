import axios from "axios";

export const unassignActivity = async (idCountry, idActivity) => {
  axios.put(`http://localhost:3001/countries/unassign/${idCountry}`, {
    idActivity,
  });
};
