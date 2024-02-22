import axios from "axios";
import Cookies from 'js-cookie';

const API_URL_DEVELOPMENT = "http://34.126.181.161:4646/api/v1";
const API_URL_PRODUCTION = "http://localhost:3000";
console.log(API_URL_PRODUCTION);

const BASE_URL = API_URL_DEVELOPMENT;

export const request = axios.create({
    baseURL: BASE_URL,
    // withCredentials: true,
  });

  request.interceptors.request.use(
    (config) => {
      config.headers["x-client-accesstoken"] = Cookies.get("accress_token");
      config.headers["x-client-refreshtoken"] = Cookies.get("refresh_token");
      
      config.headers["x-client-id"] = Cookies.get("account_id");

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  )
  
  request.interceptors.response.use(
    (response) => {
        return response
    },
    async(error) => {
      // if (error.response && error.response.status === 401) {
      //   localStorage.removeItem("token");
      // }
      const originalRequest = error.config;
      if (error.response && error.response.status === 401 && !originalRequest._retry) {
        try {
          const refreshResponse = await axios.post(`${BASE_URL}/refresh`);
          const accessToken = refreshResponse.data.accessToken;
          originalRequest.headers["x-client-accesstoken"] = Cookies.set("accress_token", accessToken);
          originalRequest.headers["x-client-refreshtoken"] = Cookies.set("refresh_token", accessToken);
          
          originalRequest.headers["x-client-id"] = Cookies.get("account_id");
          
          return axios(originalRequest);
        } catch (error) {
          return Promise.reject(error);
        }
      }
      console.log(originalRequest)
      return Promise.reject(error);
    }
  );