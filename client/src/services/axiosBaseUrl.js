import axios from "axios";

const axiosBaseUrl = axios.create({
  baseURL: "http://localhost:3001",
});

export default axiosBaseUrl;
