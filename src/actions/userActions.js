import axios from "axios";
import jwt_decode from "jwt-decode";

import { SET_CURRENT_USER } from "./types";
import setAuthToken from "../utils/setAuthToken";

// Login user - get user token
export const loginUser = userData => dispatch => {
  axios.post("api/users/login", userData).then(res => {
    // Save to localStorage
    const { token } = res.data;
    localStorage.setItem("jwtItiToken", token);

    // Set token to axios authorization header
    setAuthToken(token);

    // Decode token to get user data
    const decoded = jwt_decode(token);
    console.log(decoded);

    // Set current user
    dispatch(setCurrentUser(decoded));
  });
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtItiToken");

  //Remove auth header from future requests
  setAuthToken(false);

  // Reset current user
  dispatch(setCurrentUser({}));
};

// Set/reset logged in user in redux
export const setCurrentUser = payload => {
  return {
    type: SET_CURRENT_USER,
    payload
  };
};
