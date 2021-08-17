import { API } from "@/utils/constants";
import Axios from "axios";

export const request = Axios.create({
  baseURL: `${API}`,
  headers: {
    "Content-Type": "application/json",
  },
});
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use((response) => {
  return response;
});
