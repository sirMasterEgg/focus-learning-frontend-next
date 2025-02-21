import axios from "axios";

// Axios Interceptor Instance
const AxiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL + "api/v1",
  withCredentials: true,
  withXSRFToken: true,
});

const XsrfInstance = axios.create({
  baseURL: process.env.BACKEND_URL + "sanctum/csrf-cookie",
});

export { XsrfInstance };
export default AxiosInstance;
