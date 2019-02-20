import { FETCH_ITINERARIES } from "../actions/types";

const initialState = [];

export default function itinerariesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITINERARIES:
      return action.itineraries;
    default:
      return state;
  }
}
