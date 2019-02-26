import { FETCH_ITINERARIES, SAVE_NEW_ITINERARY } from "./types";
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

export const saveNewItinerary = itineraryData => dispatch => {
  axios
    .post("api/itineraries", itineraryData)
    .then(response => {
      console.log(response.data);
      return dispatch({
        type: SAVE_NEW_ITINERARY,
        payload: response.data
      });
    })
    .catch(err => {
      throw err;
    });
};
