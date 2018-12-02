import { combineReducers } from "redux";

// App consists many pages and hence have multiple reducers/data-stores
// All they need to be combined in single reducer/data-store

import city from "./city";

const initialReducer = {
  cities: city
};

export default combineReducers(initialReducer);
