import { FETCH_ITINERARIES } from "./types";
import axios from "axios";

export const fetchItineraries = itineraries => {
  return {
    type: FETCH_ITINERARIES,
    itineraries
  };
};

export const fetchIterinariesForOneCity = props => {
  return dispatch => {
    const cityName = props.match.params.cityName;
    // console.log(`arguments in fetchIterinariesForOneCity: ${cityNameIn}`);
    return axios
      .get(`/api/itineraries/${cityName}`)
      .then(response => {
        dispatch(fetchItineraries(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
