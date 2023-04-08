import axios from "axios";
import { localServ } from "./localServ";

export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMzEiLCJIZXRIYW5TdHJpbmciOiIxOC8xMS8yMDIzIiwiSGV0SGFuVGltZSI6IjE3MDAyNjU2MDAwMDAiLCJuYmYiOjE2ODI0NDIwMDAsImV4cCI6MTcwMDQxMzIwMH0.qs5wMfdK7arZh-8r1gEBUyzeSLVDowZOx833nTaSSgo";

export const BASE_URL = "https://movienew.cybersoft.edu.vn";
export const maNhom = "GP03";

export const https = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
    Authorization: "Bearer " + localServ.user.get()?.accessToken,
  },
});
// https.interceptors.request.use(
//   (config) => {
//     // do something before request is sent
//     store.dispatch(setIsLoading(true));
//     return config;
//   },
//   (err) => {
//     // do something with request error
//     return Promise.reject(err);
//   }
// );
// https.interceptors.response.use(
//   (res) => {
//     store.dispatch(setIsLoading(false));
//     // do something with response data
//     return res;
//   },
//   (err) => {
//     // do something with response error
//     store.dispatch(setIsLoading(false));
//     return Promise.reject(err);
//   }
// );
