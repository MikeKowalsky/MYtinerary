import {
  GET_MESSAGES_ITINERARY,
  ADD_MESSAGE,
  REMOVE_MESSAGE
} from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGES_ITINERARY:
      return action.payload;
    case ADD_MESSAGE:
      return [action.payload, ...state];
    case REMOVE_MESSAGE:
      return state.filter(message => message._id !== action.payload);
    default:
      return state;
  }
}
