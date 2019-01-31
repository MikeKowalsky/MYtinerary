import { combineReducers } from "redux";
import cities from "./cityReducer";
import itineraries from "./itineraryReducer";
import user from "./userReducer";

export default combineReducers({
  cities,
  itineraries,
  user
});
