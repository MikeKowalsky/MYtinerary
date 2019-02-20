import { SET_CURRENT_ITINERARY } from "../actions/types";

export default function itinerariesReducer(state = null, action) {
  switch (action.type) {
    case SET_CURRENT_ITINERARY:
      return action.payload;
    default:
      return state;
  }
}
