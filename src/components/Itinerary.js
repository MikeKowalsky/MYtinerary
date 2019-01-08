import React, { Component, Fragment } from "react";
import "./Itinerary.css";

class Itinerarie extends Component {
  render() {
    const { author, name, rating, duration, priceRange } = this.props.itinerary;

    return (
      <Fragment>
        <div className="my-card">
          <div className="all-info">
            <p className="user-name">{author}</p>
            <div className="text-info">
              <p>{name}</p>
              <div className="iti-info">
                <span>Ranting: {rating}</span>
                <span>{duration} Hours</span>
                <span>{priceRange}</span>
              </div>
            </div>
          </div>
          <div>
            <button className="view-all-button">
              <i className="material-icons">expand_more</i>
              <span>View All</span>
              <i className="material-icons">expand_more</i>
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Itinerarie;
