import { SET_CURRENT_ITINERARY } from "../actions/types";

const initialState = {};

export default function itinerariesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_ITINERARY:
      return action.payload;
    default:
      return state;
  }
}
