import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setItinerary } from "../../actions/itineraryActions";
import isEmpty from "../../validation/is-empty";

import ItineraryBasic from "../ItineraryBasic/ItineraryBasic";
import ItineraryDetails from "../ItineraryDetail/ItineraryDetail";

import "./Itinerary.css";

class Itinerary extends Component {
  handleClick = direction => {
    direction === "more"
      ? // call the action to set up current itinerary
        this.props.setItinerary(this.props.itinerary)
      : // reset current itinerary
        this.props.setItinerary({});
  };

  render() {
    return (
      <Fragment>
        <div className="itinerary my-card">
          <ItineraryBasic itinerary={this.props.itinerary} />
          {isEmpty(this.props.itineraryFromState) ||
          this.props.itinerary._id !== this.props.itineraryFromState._id ? (
            <button
              className="view-all-button"
              onClick={this.handleClick.bind(this, "more")}
            >
              <i className="material-icons">expand_more</i>
              <span>View All</span>
              <i className="material-icons">expand_more</i>
            </button>
          ) : (
            <ItineraryDetails back={this.handleClick.bind(this, "back")} />
          )}
        </div>
      </Fragment>
    );
  }
}

Itinerary.propTypes = {
  itinerary: PropTypes.object.isRequired,
  itineraryFromState: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  itineraryFromState: state.itinerary
});

export default connect(
  mapStateToProps,
  { setItinerary }
)(Itinerary);
