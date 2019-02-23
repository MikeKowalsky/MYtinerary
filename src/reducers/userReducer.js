import { SET_CURRENT_USER, GET_USER_DETAILS } from "../actions/types";
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
      console.log(state);
      return {
        ...state,
        details: action.payload
      };
    default:
      return state;
  }
}
