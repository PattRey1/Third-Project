import axios from "axios";
import { base_url } from "./baseURL";

export const createNewBlog = data => {
  let config = {};
  return axios.post(`${base_url}/api/blog/create`, data);
};
export const readBlog = data => {
  let config = {};
  return axios.read(`${base_url}/api/blog/read`, data);
};
export const editBlog = data => {
  let config = {};
  return axios.patch(`${base_url}/api/blog/edit`, data);
};
export const deleteBlog = data => {
  let config = {};
  return axios.delete(`${base_url}/api/blog/delete`, data);
};
