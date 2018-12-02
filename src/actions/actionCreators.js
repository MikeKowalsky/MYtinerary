import { get } from "../utils/request";
import { FETCH_CITIES } from "../actions/actions";

// export const fetchActionCreator = () => {
//   return dispatch => {
//     return get("http://localhost:5000/cities/all").then(res => {
//       console.log(res);
//       dispatch(storeCities(res.data));
//       return res;
//     });
//   };
// };

export const fetchCities = () => dispatch => {
  return get("http://localhost:5000/cities/all")
    .then(res => res.json())
    .then(cities => {
      console.log(cities);
      dispatch({
        type: FETCH_CITIES,
        payload: cities
      });
    });
};
