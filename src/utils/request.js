import axios from "axios";

const API_URL_DEVELOPMENT = "https://jsonplaceholder.typicode.com";
const API_URL_PRODUCTION = "http://localhost:3000";
console.log(API_URL_DEVELOPMENT);

const BASE_URL = API_URL_PRODUCTION;

export const request = axios.create({
    baseURL: BASE_URL,
    // withCredentials: true,
  });
  
  // request.interceptors.response.use(
  //   (response) => {
  //       return response
  //   },
  //   (error) => {
  //     if (error.response && error.response.status === 401) {
  //       localStorage.removeItem("token");
  //     }
  //     return Promise.reject(error);
  //   }
  // );