import { SET_CURRENT_ITINERARY } from "./types";

export const setItinerary = itineraryData => {
  return {
    type: SET_CURRENT_ITINERARY,
    payload: itineraryData
  };
};
