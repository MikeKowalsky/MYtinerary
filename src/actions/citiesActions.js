import { FETCH_CITIES } from "./types";
import axios from "axios";

// akcja synchroniczna - bo tylko taka moze rzyczywiscie zmienic state w store
export const fetchCities = cities => {
  return {
    type: FETCH_CITIES,
    cities
  };
};

// akcja asynchrniczna, bo musze zrobic fetch, ktora jak otrzyma odpowiedz calluje tą akcję synchroniczna
export const fetchAllCities = () => {
  return dispatch => {
    return axios
      .get("/api/cities")
      .then(response => {
        dispatch(fetchCities(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
