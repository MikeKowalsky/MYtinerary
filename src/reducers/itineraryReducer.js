import { FETCH_ITINERARIES } from "../actions/types";

export default function itineraryReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ITINERARIES:
      return action.itineraries;
    default:
      return state;
  }
}
