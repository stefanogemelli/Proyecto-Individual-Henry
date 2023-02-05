import axios from "../../../../../services/axiosBaseUrl";

export const createActivity = async (body) => {
  const { data } = await axios.post("/activities", body);
  return data;
};
