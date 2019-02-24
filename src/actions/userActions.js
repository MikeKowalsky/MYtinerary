import axios from "axios";
import jwt_decode from "jwt-decode";

import {
  SET_CURRENT_USER,
  GET_USER_DETAILS,
  GET_USER_FAVORITES
} from "./types";
import setAuthToken from "../utils/setAuthToken";

// Register new user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err => alert(err.response.data.error));
};

// Login user - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("api/users/login", userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtItiToken", token);

      // Set token to axios authorization header
      setAuthToken(token);

      // Decode token to get user data
      const decoded = jwt_decode(token);

      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => alert(err.response.data.error));
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

// get user details
export const getUserDetails = () => dispatch => {
  axios
    .get("/api/users")
    .then(profile =>
      dispatch({
        type: GET_USER_DETAILS,
        payload: profile.data
      })
    )
    .catch(err => console.log(err.response.data.error));
};

// get user favorites
export const getUserFavorites = () => dispatch => {
  axios
    .get("/api/users/favorites")
    .then(profile =>
      dispatch({
        type: GET_USER_FAVORITES,
        payload: profile.data
      })
    )
    .catch(err => console.log(err.response.data.error));
};
