import axios from "axios";
import { base_url } from "./baseURL";

export const login = data => {
  return axios.post(`${base_url}/api/login`, data);
};

export const signup = data => {
  return axios.post(`${base_url}/api/signup`, data);
};

export const logout = () => {
  localStorage.clear();
};
