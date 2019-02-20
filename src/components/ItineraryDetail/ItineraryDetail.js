import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./itineraryDetail.css";

class ItineraryDetails extends Component {
  constructor() {
    super();
    this.state = {
      index: 2
    };
  }

  changeIndex(direction) {
    this.setState(prevState => {
      let newIndex;
      direction === "down"
        ? (newIndex = prevState.index - 1)
        : (newIndex = prevState.index + 1);
      return this.checkLength(newIndex)
        ? { index: newIndex }
        : { index: this.loop(newIndex) };
    });
  }

  checkLength(index) {
    console.log("newIndex", index);
    const length = this.props.itinerary.images.length;
    return index >= 0 && index < length ? true : false;
  }

  loop(index) {
    return index < 0 ? this.props.itinerary.images.length - 1 : 0;
  }

  render() {
    const { images } = this.props.itinerary;

    return (
      <React.Fragment>
        <div className="itinerary-detail wrapper">
          <div className="imgWrapper">
            <img src={images[this.state.index].url} alt="foto" />
          </div>
          <div className="picture-control">
            <i
              className="material-icons"
              onClick={this.changeIndex.bind(this, "down")}
            >
              arrow_back_ios
            </i>
            <i
              className="material-icons"
              onClick={this.changeIndex.bind(this, "up")}
            >
              arrow_forward_ios
            </i>
          </div>
        </div>
        <div>
          <button className="view-all-button" onClick={this.props.back}>
            <i className="material-icons">expand_less</i>
            <span>close</span>
            <i className="material-icons">expand_less</i>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

ItineraryDetails.propTypes = {
  itinerary: PropTypes.object.isRequired,
  back: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  itinerary: state.itinerary
});

export default connect(mapStateToProps)(ItineraryDetails);
