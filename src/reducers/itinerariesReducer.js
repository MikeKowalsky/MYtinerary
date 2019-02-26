import { FETCH_ITINERARIES, SAVE_NEW_ITINERARY } from "../actions/types";

const initialState = [];

export default function itinerariesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITINERARIES:
      return action.itineraries;
    case SAVE_NEW_ITINERARY:
      console.log(state, action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
}
