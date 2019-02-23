import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";
import { getItineraryById } from "../../actions/itineraryActions";

import Header from "../../components/Header/Header";
import ItineraryBasic from "../../components/ItineraryBasic/ItineraryBasic";
import ItineraryDetails from "../../components/ItineraryDetail/ItineraryDetail";
import MessageForm from "../../components/Messages/MessageForm";
import "./SingleItinerary.css";

class SingleItinerary extends Component {
  componentDidMount() {
    if (isEmpty(this.props.itinerary)) {
      this.props.getItineraryById("5c339aa0bd92104287b0e9ca");
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {!isEmpty(this.props.itinerary) ? (
          <div className="single-iti-wrapper">
            <ItineraryBasic itinerary={this.props.itinerary} />
            <ItineraryDetails multi={false} />
            {this.props.user.isAuthenticated ? (
              <MessageForm format="long" />
            ) : (
              <p className="not-login-message">
                You need to be login to add messages!
              </p>
            )}
          </div>
        ) : (
          <div className="single-iti-wrapper">
            <p>Loading ...</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

SingleItinerary.propTypes = {
  itinerary: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getItineraryById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  itinerary: state.itinerary,
  user: state.user
});

export default connect(
  mapStateToProps,
  { getItineraryById }
)(withRouter(SingleItinerary));
