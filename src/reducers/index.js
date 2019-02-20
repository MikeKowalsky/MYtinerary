import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itinerariesReducer from "./itinerariesReducer";
import itineraryReducer from "./itineraryReducer";
import userReducer from "./userReducer";
import messagesReducer from "./messagesReducer";

export default combineReducers({
  cities: cityReducer,
  itineraries: itinerariesReducer,
  user: userReducer,
  itinerary: itineraryReducer,
  messages: messagesReducer
});
