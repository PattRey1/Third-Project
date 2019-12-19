import axios from "axios";
import { base_url } from "./baseURL";

export const createComment = data => {
  let config = {};
  return axios.post(`${base_url}/api/comment/create`, data);
};

export const deleteComment = data => {
  let config = {};
  return axios.delete(`${base_url}/api/comment/delete`, data);
};
