import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getUserDetails } from "../../actions/userActions";
import isEmpty from "../../validation/is-empty";

import Header from "../../components/Header/Header";
import "./Profile.css";

class Profile extends Component {
  componentDidMount() {
    this.props.getUserDetails();
  }

  render() {
    const { user, details, cities } = this.props;

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
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}

Profile.defaultProps = {
  details: {}
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
  cities: PropTypes.array.isRequired,
  getUserDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user,
  details: state.user.details,
  cities: state.cities
});

export default connect(
  mapStateToProps,
  { getUserDetails }
)(Profile);
