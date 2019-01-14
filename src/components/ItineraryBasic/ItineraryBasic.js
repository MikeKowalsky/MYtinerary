import React, { Component, Fragment } from "react";

class ItineraryBasic extends Component {
  render() {
    console.log(this.props.info);
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
      </Fragment>
    );
  }
}

export default ItineraryBasic;
