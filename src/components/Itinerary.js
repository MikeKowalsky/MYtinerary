import React, { Component, Fragment } from "react";

class Itinerarie extends Component {
  constructor(props) {
    super(props);
    console.log(props.itinerary);
  }

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
            <button className="view-all-button">View All</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Itinerarie;
