import axios from "axios";
import Cookies from 'js-cookie';
import { ACCESS_TOKEN, ACCOUNT_ID, REFRESH_TOKEN } from "../constants/token";
import { message } from "antd";
import { sleep } from "./sleep";

const LOGOUT_URL = 'https://dream-editor.tech/api/v1/auth/logout'

const API_URL_DEVELOPMENT = "http://34.126.181.161:4646/api/v1";

const SECURE_API_DEVELOPMENT = "https://dream-editor.tech/api/v1"

const API_URL_PRODUCTION = "http://localhost:3000";
console.log(API_URL_PRODUCTION);

const BASE_URL = SECURE_API_DEVELOPMENT;

const cookies = () => ({
  accessToken: {
    key: "x-client-accesstoken",
    value: Cookies.get(ACCESS_TOKEN)
  },
  refreshToken: {
    key: "x-client-refreshtoken",
    value: Cookies.get(REFRESH_TOKEN)
  },
  accountId: {
    key: "x-client-id",
    value: Cookies.get(ACCOUNT_ID)
  },
})

const logoutUser = async () => {
  try {
      Cookies.remove('accessToken')
      Cookies.remove('refreshToken')
      Cookies.remove('accountId')

      message.error('Someone is logging into your account')
      await sleep(2000);
      window.location.replace("/login");
  } catch (error) {
      return Promise.reject(error);
  }
}

const errorHandler = async (error) => {
  if (error.response) {
      switch (error.response.status) {
          case 409:
              return logoutUser(error.config);
          case 500:
              message.error('Something went wrong');
              break;
          default:
      }
  } 
  return Promise.reject(error);
};

export const request = axios.create({
    baseURL: BASE_URL,
  });

  request.interceptors.request.use(
    (config) => {
      config.headers[cookies()['accessToken'].key] = cookies()['accessToken'].value;
      config.headers[cookies()['refreshToken'].key] = cookies()['refreshToken'].value;
      config.headers[cookies()['accountId'].key] = cookies()['accountId'].value;

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
    errorHandler
    // async(error) => {
    //   // if (error.response && error.response.status === 401) {
    //   //   localStorage.removeItem("token");
    //   // }
    //   // const originalRequest = error.config;
    //   // if (error.response && error.response.status === 401 && !originalRequest._retry) {
    //   //   try {
    //   //     const refreshResponse = await axios.post(`${BASE_URL}/refresh`);
    //   //     const accessTokenRes = refreshResponse.data.accessToken;
    //   //     const refreshTokenRes = refreshResponse.data.refreshToken;

    //   //     originalRequest.headers[cookies['accessToken'].key] = Cookies.set("access_token", accessTokenRes);
    //   //     originalRequest.headers[cookies['refreshToken'].key] = Cookies.set("refresh_token", refreshTokenRes);
    //   //     originalRequest.headers[cookies['accountId'].key] = accountId;
          
    //   //     return axios(originalRequest);
    //   //   } catch (error) {
    //   //     return Promise.reject(error);
    //   //   }
    //   // }
      
    //   return Promise.reject(error);
    // }
  );