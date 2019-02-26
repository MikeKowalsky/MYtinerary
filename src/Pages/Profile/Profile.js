import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { getUserDetails, getUserItineraries } from "../../actions/userActions";
import isEmpty from "../../validation/is-empty";

import Header from "../../components/Header/Header";
import FavoriteItinerary from "./FavoriteItinerary";
import UserItineraries from "./UserItineraries";
import "./Profile.css";

class Profile extends Component {
  componentDidMount() {
    this.props.getUserDetails();
    this.props.getUserItineraries();
  }

  render() {
    const { user, details, cities, userItineraries } = this.props;

    return (
      <React.Fragment>
        <Header />
        <div className="profile-wrapper">
          <h1>Profile page</h1>
          <div className="name-img">
            <p>{user.name}</p>
            <img src={user.avatar} alt="avatar" />
          </div>
          {isEmpty(details) ? (
            <p>Loading ...</p>
          ) : (
            <React.Fragment>
              <div>
                <p>E-mail: {details.email}</p>
                <p>Join date: {details.date}</p>
              </div>
              <FavoriteItinerary details={details} cities={cities} />
              <UserItineraries
                userName={user.name}
                list={userItineraries}
                cities={cities}
              />
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
  userItineraries: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  getUserDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user,
  details: state.user.details,
  userItineraries: state.user.userItineraries,
  cities: state.cities
});

export default connect(
  mapStateToProps,
  { getUserDetails, getUserItineraries }
)(Profile);
