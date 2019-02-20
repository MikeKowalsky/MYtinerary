import { GET_MESSAGES_ITINERARY } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case GET_MESSAGES_ITINERARY:
      return action.payload;
    default:
      return state;
  }
}
