import { FETCH_CITY, FETCH_ITINERARIES } from "./types";
import axios from "axios";

// const apiUrl = "http://localhost:5000/cities/all";

export const fetchCities = cities => {
  return {
    type: FETCH_CITY,
    cities
  };
};

export const fetchAllCities = () => {
  return dispatch => {
    return axios
      .get("http://localhost:5000/cities/all")
      .then(response => {
        dispatch(fetchCities(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchItineraries = itineraries => {
  return {
    type: FETCH_ITINERARIES,
    itineraries
  };
};

export const fetchIterinariesForOneCity = cityName => {
  return dispatch => {
    const cityNameIn = cityName.match.params.cityName;
    // console.log(`arguments in fetchIterinariesForOneCity: ${cityNameIn}`);
    return (
      axios
        .get(`http://localhost:5000/itinerary/${cityNameIn}`)
        // .get("http://localhost:5000/itinerary/Barcelona")
        // .get("http://localhost:5000/itinerary/:cityName")
        .then(response => {
          console.log(response.data);
          dispatch(fetchItineraries(response.data));
        })
        .catch(error => {
          throw error;
        })
    );
  };
};
