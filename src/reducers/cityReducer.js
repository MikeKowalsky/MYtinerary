import { FETCH_CITIES } from "../actions/types";

export default function cityReducer(state = [], action) {
  switch (action.type) {
    case FETCH_CITIES:
      return action.cities;
    default:
      return state;
  }
}
