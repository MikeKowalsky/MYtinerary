export default function(
  state = {
    fetchedCities: null
  },
  action
) {
  switch (action.type) {
    case "FETCH_CITIES":
      console.log("reducer_FETCH_CITIES");
      return {
        ...state,
        fetchedCities: action.payload
      };

    default:
      return state;
  }
}
