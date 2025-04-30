import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL + "api/v1",
  withCredentials: true,
  withXSRFToken: true,
});

export default AxiosInstance;
