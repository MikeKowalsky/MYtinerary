import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

import Header from "../../components/Header/Header";
import ItineraryBasic from "../../components/ItineraryBasic/ItineraryBasic";
import ItineraryDetails from "../../components/ItineraryDetail/ItineraryDetail";
import MessageForm from "../../components/Messages/MessageForm";
import "./SingleItinerary.css";

class SingleItinerary extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {!isEmpty(this.props.itinerary) ? (
          <div className="single-iti-wrapper">
            <ItineraryBasic itinerary={this.props.itinerary} />
            <ItineraryDetails multi={false} />
            {this.props.user.isAuthenticated ? (
              <MessageForm />
            ) : (
              <p className="not-login-message">
                You need to be login to add messages!
              </p>
            )}
          </div>
        ) : (
          <div className="single-iti-wrapper">
            <p>Something went wrong ...</p>
            <p>Go back and try again.</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

SingleItinerary.propTypes = {
  itinerary: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  itinerary: state.itinerary,
  user: state.user
});

export default connect(mapStateToProps)(withRouter(SingleItinerary));
