import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FavoriteItinerary = ({ details, cities }) => {
  return (
    <div>
      <p>Favorite Itineraries:</p>
      {details.favoriteItis.map(iti => (
        <div key={iti._id} className="profile-iti-wrapper">
          <Link to={`/iterinaryDetails/${iti.itineraryId}`}>
            <p> -> {iti.name}</p>
          </Link>
          <p> {cities.find(city => city._id === iti.cityId).name}</p>
          <p>({iti.itineraryId})</p>
        </div>
      ))}
    </div>
  );
};

FavoriteItinerary.propTypes = {
  cities: PropTypes.array.isRequired,
  details: PropTypes.object.isRequired
};

export default FavoriteItinerary;
