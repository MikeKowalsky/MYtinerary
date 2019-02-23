import { SET_CURRENT_ITINERARY } from "./types";
// import { SET_CURRENT_ITINERARY, GET_ITINERARY_BY_ID } from "./types";
import axios from "axios";

export const setItinerary = itineraryData => {
  return {
    type: SET_CURRENT_ITINERARY,
    payload: itineraryData
  };
};

export const getItineraryById = itineraryId => dispatch => {
  return axios
    .get(`/api/itineraries/single/${itineraryId}`)
    .then(response => {
      dispatch(setItinerary(response.data));
    })
    .catch(error => {
      throw error;
    });
};
