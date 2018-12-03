import { FETCH_CITY } from "../actions/types";

export default function cityReducer(state = [], action) {
  switch (action.type) {
    case FETCH_CITY:
      return action.cities;
    default:
      return state;
  }
}
