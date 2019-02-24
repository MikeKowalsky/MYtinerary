import {
  SET_CURRENT_USER,
  GET_USER_DETAILS,
  GET_USER_FAVORITES,
  ADD_FAVORITES,
  REMOVE_FAVORITES
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
        favorites: action.payload.map(fav => fav._id)
      };
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: action.payload.map(e => e._id)
      };
    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: action.payload.map(e => e._id)
      };
    default:
      return state;
  }
}
