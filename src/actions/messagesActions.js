import { GET_MESSAGES_ITINERARY } from "./types";
import axios from "axios";

// get messages for itinerary
export const getMessagesItinerary = (itineraryId, limit) => dispatch => {
  axios
    .get(`/api/messages/itinerary/${itineraryId}/${limit}`)
    .then(res =>
      dispatch({
        type: GET_MESSAGES_ITINERARY,
        payload: res.data
      })
    )
    .catch(err => alert(err.response.data));
};
