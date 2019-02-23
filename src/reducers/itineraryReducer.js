import { SET_CURRENT_ITINERARY } from "../actions/types";
// import { SET_CURRENT_ITINERARY, GET_ITINERARY_BY_ID } from "../actions/types";

const initialState = {};

export default function itinerariesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_ITINERARY:
      return action.payload;
    // case GET_ITINERARY_BY_ID:
    //   return action.payload;
    default:
      return state;
  }
}
