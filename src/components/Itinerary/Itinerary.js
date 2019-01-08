import React, { Component, Fragment } from "react";
import "./Itinerary.css";

class Itinerarie extends Component {
  render() {
    console.log(this.props.itinerary);
    const {
      author,
      name,
      rating,
      duration,
      priceRange,
      tags
    } = this.props.itinerary;

    return (
      <Fragment>
        <div className="my-card">
          <div className="all-info">
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
