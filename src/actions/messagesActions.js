import { GET_MESSAGES_ITINERARY, ADD_MESSAGE } from "./types";
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

// add message
export const addMessage = messageData => dispatch => {
  axios
    .post("api/messages", messageData)
    .then(res =>
      dispatch({
        type: ADD_MESSAGE,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
