import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class ItineraryBasic extends Component {
  render() {
    const {
      author,
      name,
      rating,
      duration,
      priceRange,
      tags
    } = this.props.info;

    return (
      <Fragment>
        <div className="all-info">
          <dir className="iti-img">
            <img src={`http://i.pravatar.cc/300?img=2`} alt="avatar" />
            <p className="user-name">{author}</p>
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
  info: PropTypes.object.isRequired
};

export default ItineraryBasic;
