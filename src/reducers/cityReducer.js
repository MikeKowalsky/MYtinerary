import { FETCH_CITIES } from "../actions/types";

const initialState = [];

export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CITIES:
      return action.cities;
    default:
      return state;
  }
}
