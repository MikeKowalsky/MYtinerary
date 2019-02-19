import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import ItineraryBasic from "../ItineraryBasic/ItineraryBasic";
import ItineraryDetails from "../ItineraryDetail/ItineraryDetail";

import "./Itinerary.css";

class Itinerary extends Component {
  state = {
    detailsButton: false
  };

  handleClick = () => {
    this.setState(prevState => {
      return { detailsButton: !prevState.detailsButton };
    });
  };

  render() {
    return (
      <Fragment>
        <div className="itinerary my-card">
          <ItineraryBasic itinerary={this.props.itinerary} />
          {!this.state.detailsButton && (
            <button className="view-all-button" onClick={this.handleClick}>
              <i className="material-icons">expand_more</i>
              <span>View All</span>
              <i className="material-icons">expand_more</i>
            </button>
          )}
          {this.state.detailsButton && (
            <ItineraryDetails
              itinerary={this.props.itinerary}
              back={this.handleClick.bind(this)}
            />
          )}
        </div>
      </Fragment>
    );
  }
}

Itinerary.propTypes = {
  itinerary: PropTypes.object.isRequired
};

export default Itinerary;
