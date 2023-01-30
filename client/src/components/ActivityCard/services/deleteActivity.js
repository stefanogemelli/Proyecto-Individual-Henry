import axios from "axios";

export const deleteActivity = async (id) => {
  await axios.delete(`http://localhost:3001/activities/${id}`);
};
