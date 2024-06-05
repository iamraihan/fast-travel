import axios from "axios";

const apikey = "YOUR_API_KEY";
const secretCode = "YOUR_SECRET_CODE";

const axiosInstance = axios.create({
  baseURL: "https://devapi.innotraveltech.com",
  headers: {
    "Content-Type": "application/json",
    apikey: apikey,
    secretCode: secretCode,
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;
