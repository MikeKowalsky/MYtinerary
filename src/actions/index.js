import { FETCH_CITY } from "./types";
import axios from "axios";

const apiUrl = "http://localhost:5000/cities/all";

export const fetchCities = cities => {
  return {
    type: FETCH_CITY,
    cities
  };
};

export const fetchAllCities = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(response => {
        dispatch(fetchCities(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
