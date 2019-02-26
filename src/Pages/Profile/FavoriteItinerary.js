import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

const FavoriteItinerary = ({ details, cities }) => {
  return (
    <div>
      <p>Favorite Itineraries:</p>
      {isEmpty(details.favoriteItis) ? (
        <p>nothing here yet ...</p>
      ) : (
        details.favoriteItis.map(iti => (
          <div className="profile-iti-wrapper" key={iti._id}>
            <Link to={`/iterinaryDetails/${iti.itineraryId}`}>
              <p> -> {iti.name}</p>
            </Link>
            <p> {cities.find(city => city._id === iti.cityId).name}</p>
            <p>({iti.itineraryId})</p>
          </div>
        ))
      )}
    </div>
  );
};

FavoriteItinerary.propTypes = {
  cities: PropTypes.array.isRequired,
  details: PropTypes.object.isRequired
};

export default FavoriteItinerary;
