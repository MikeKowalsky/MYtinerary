import React, { Component, Fragment } from "react";

import ItineraryBasic from "../ItineraryBasic/ItineraryBasic";
import ItineraryDetails from "../ItineraryDetail/ItineraryDetail";

import "./Itinerary.css";

class Itinerary extends Component {
  state = {
    detailsButton: false
  };

  handleClick = () => {
    this.setState(() => {
      return { detailsButton: true };
    });
  };

  render() {
    console.log(this.props.itinerary);
    // const {
    //   author,
    //   name,
    //   rating,
    //   duration,
    //   priceRange,
    //   tags
    // } = this.props.itinerary;

    let bottom;
    if (this.state.detailsButton === false) {
      bottom = (
        <button className="view-all-button" onClick={this.handleClick}>
          <i className="material-icons">expand_more</i>
          <span>View All</span>
          <i className="material-icons">expand_more</i>
        </button>
      );
    } else {
      bottom = <ItineraryDetails info={this.props.itinerary} />;
    }

    return (
      <Fragment>
        <div className="my-card">
          <ItineraryBasic info={this.props.itinerary} />
          {/* <div className="all-info">
            <p className="user-name">{author}</p>
            <div className="text-info">
              <p>{name}</p>
              <div className="iti-info my-space-bet">
                <span>Ranting: {rating}</span>
                <span>{duration} Hours</span>
                <span>{priceRange}</span>
              </div>
              <div className="iti-info my-flex-start">
                {tags.map((tag, i) => (
                  <span key={i}>#{tag}</span>
                ))}
              </div>
            </div>
          </div> */}
          {bottom}
        </div>
      </Fragment>
    );
  }
}

export default Itinerary;
