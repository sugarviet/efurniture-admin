import axios from "axios";
import Cookies from 'js-cookie';

const API_URL_DEVELOPMENT = "http://34.126.181.161:4646/api/v1";
const API_URL_PRODUCTION = "http://localhost:3000";
console.log(API_URL_PRODUCTION);

const BASE_URL = API_URL_DEVELOPMENT;

const accessToken = Cookies.get("access_token");
const refreshToken = Cookies.get("refresh_token");
const accountId = Cookies.get("account_id");

const cookies = {
  accessToken: {
    key: "x-client-accesstoken",
    value: accessToken
  },
  refreshToken: {
    key: "x-client-refreshtoken",
    value: refreshToken
  },
  accountId: {
    key: "x-client-id",
    value: accountId
  },
}

export const request = axios.create({
    baseURL: BASE_URL,
    // withCredentials: true,
  });

  request.interceptors.request.use(
    (config) => {
      config.headers[cookies['accessToken'].key] = cookies['accessToken'].value;
      config.headers[cookies['refreshToken'].key] = cookies['refreshToken'].value;
      config.headers[cookies['accountId'].key] = cookies['accountId'].value;

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
          const accessTokenRes = refreshResponse.data.accessToken;
          const refreshTokenRes = refreshResponse.data.refreshToken;

          originalRequest.headers[cookies['accessToken'].key] = Cookies.set("access_token", accessTokenRes);
          originalRequest.headers[cookies['refreshToken'].key] = Cookies.set("refresh_token", refreshTokenRes);
          originalRequest.headers[cookies['accountId'].key] = accountId;
          
          return axios(originalRequest);
        } catch (error) {
          return Promise.reject(error);
        }
      }
      
      return Promise.reject(error);
    }
  );