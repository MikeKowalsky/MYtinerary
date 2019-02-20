import { GET_MESSAGES_ITINERARY, ADD_MESSAGE } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGES_ITINERARY:
      return action.payload;
    case ADD_MESSAGE:
      return [action.payload, ...state];
    default:
      return state;
  }
}
