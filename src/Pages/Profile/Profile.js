import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "../../components/Header/Header";
import "./Profile.css";

class Profile extends Component {
  render() {
    const { user } = this.props;

    return (
      <React.Fragment>
        <Header />
        <div className="profile-wrapper">
          <h1>Profile page</h1>
          <div className="name-img">
            <p>{user.name}</p>
            <img src={user.avatar} alt="avatar" />
          </div>
          <div>
            <p>email</p>
            <p>join date</p>
          </div>
          <div>
            <p>Favorite Itineraries</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps)(Profile);
