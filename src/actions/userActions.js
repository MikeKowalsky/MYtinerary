import axios from "axios";
import jwt_decode from "jwt-decode";

import { SET_CURRENT_USER } from "./types";
import setAuthToken from "../utils/setAuthToken";

// Login user - get user token
export const loginUser = userData => dispatch => {
  axios.post("api/users/login", userData).then(res => {
    // Save to localStorage
    const { token } = res.data;
    localStorage.setItem("jwtToken", token);

    // Set token to axios authorization header
    setAuthToken(token);

    // Decode token to get user data
    const decoded = jwt_decode(token);
    console.log(decoded);

    // Set current user
    dispatch(setCurrentUser(decoded));
  });
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
