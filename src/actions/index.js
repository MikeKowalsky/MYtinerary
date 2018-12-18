import { FETCH_CITY, FETCH_ITINERARIES } from "./types";
import axios from "axios";

// akcja synchroniczna - bo tylko taka moze rzyczywiscie zmienic state w store
export const fetchCities = cities => {
  return {
    type: FETCH_CITY,
    cities
  };
};

// akcja asynchrniczna, bo musze zrobic fetch, ktora jak otrzyma odpowiedz calluje tą akcję synchroniczna
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

export const fetchIterinariesForOneCity = props => {
  return dispatch => {
    const cityName = props.match.params.cityName;
    // console.log(`arguments in fetchIterinariesForOneCity: ${cityNameIn}`);
    return axios
      .get(`http://localhost:5000/itinerary/${cityName}`)
      .then(response => {
        dispatch(fetchItineraries(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
