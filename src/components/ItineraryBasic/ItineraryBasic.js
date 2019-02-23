import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class ItineraryBasic extends Component {
  render() {
    const {
      user,
      name,
      rating,
      duration,
      priceRange,
      tags
    } = this.props.itinerary;

    return (
      <Fragment>
        <div className="itinerary-basic all-info">
          <dir className="iti-img">
            <img src={user.avatar} alt="avatar" />
            <p className="user-name">{user.name}</p>
          </dir>
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
      </Fragment>
    );
  }
}

ItineraryBasic.propTypes = {
  itinerary: PropTypes.object.isRequired
};

export default ItineraryBasic;
