import axios from "axios";

const axiosBaseUrl = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default axiosBaseUrl;
