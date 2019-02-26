import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

const UserItinerary = ({ userName, list, cities }) => {
  return (
    <div>
      <p>{userName}'s Itineraries:</p>
      {isEmpty(list) ? (
        <div>
          <p>nothing here yet ... </p>
          <Link to="/newIterinary">
            <p>Click here to create your first itinerary!</p>
          </Link>
        </div>
      ) : (
        list.map(iti => (
          <div key={iti._id} className="profile-iti-wrapper">
            <Link to={`/iterinaryDetails/${iti.itineraryId}`}>
              <p> -> {iti.name}</p>
            </Link>
            <p> {cities.find(city => city._id === iti.city).name}</p>
            <p>({iti._id})</p>
          </div>
        ))
      )}
    </div>
  );
};

UserItinerary.propTypes = {
  userName: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  list: PropTypes.array.isRequired
};

export default UserItinerary;
