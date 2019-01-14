import React, { Component, Fragment } from "react";

class ItineraryDetails extends Component {
  render() {
    console.log(this.props.info);
    const { images } = this.props.info;

    handleClick = () => {
      // przekierowanie do itineraries
    };

    return (
      <Fragment>
        <div>
          {images.map((img, i) => (
            <div key={i} className="imgWrapper">
              <img src={img.url} alt="foto" />
            </div>
          ))}
        </div>
        <div>
          <button className="view-all-button" onClick={this.handleClick}>
            <i className="material-icons">expand_less</i>
            <span>close</span>
            <i className="material-icons">expand_less</i>
          </button>
        </div>
      </Fragment>
    );
  }
}

export default ItineraryDetails;
