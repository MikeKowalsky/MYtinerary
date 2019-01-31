import React, { Component, Fragment } from "react";

class ItineraryBasic extends Component {
  //just temporary
  randomNumber = () => {
    return parseInt(Math.random() * 69) + 1;
  };

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
          <dir className="iti-img">
            <img
              src={`http://i.pravatar.cc/300?img=${this.randomNumber()}`}
              alt="avatar"
            />
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

export default ItineraryBasic;
