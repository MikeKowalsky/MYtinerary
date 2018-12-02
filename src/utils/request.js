import axios from "axios";

export const get = (url, params) => {
  console.log("fetching cities");
  return axios.get(url, params);
};
