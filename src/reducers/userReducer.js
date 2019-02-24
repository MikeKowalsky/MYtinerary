import {
  SET_CURRENT_USER,
  GET_USER_DETAILS,
  GET_USER_FAVORITES
} from "../actions/types";
import isEmpty from "../validation/is-empty";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case GET_USER_DETAILS:
      return {
        ...state,
        details: action.payload
      };
    case GET_USER_FAVORITES:
      return {
        ...state,
        favorites: action.payload
      };
    default:
      return state;
  }
}
