import axios from "axios";
import { base_url } from "./baseURL";

export const createNewPost = data => {
  let config = {};
  let user = JSON.parse(localStorage.getItem("user"));

  data["_owner"] = user._id;
  return axios.post(`${base_url}/api/post/create`, data);
};
export const readPost = () => {
  let config = {};
  return axios.get(`${base_url}/api/post/read`);
};
export const editPost = data => {
  let config = {};
  return axios.patch(`${base_url}/api/post/edit`, data);
};
export const deletePost = data => {
  let config = {};
  return axios.delete(`${base_url}/api/post/delete`, data);
};
