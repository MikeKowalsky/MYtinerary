import { combineReducers } from "redux";
import cities from "./cityReducer";
import itineraries from "./itineraryReducer";

export default combineReducers({
  cities: cities,
  inineraries: itineraries
});
