import axios from "axios";
import { base_url } from "./baseURL";

export const createAssisence = data => {
  let config = {};
  return axios.post(`${base_url}/api/event/create`, data);
};

export const deleteAssintence = data => {
  let config = {};
  return axios.delete(`${base_url}/api/event/delete`, data);
};
