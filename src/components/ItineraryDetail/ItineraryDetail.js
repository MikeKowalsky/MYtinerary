import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import MessageFeed from "../Messages/MessageFeed";
import "./itineraryDetail.css";

class ItineraryDetails extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
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
    return index >= 0 && index < this.props.itinerary.images.length
      ? true
      : false;
  }

  loop(index) {
    return index < 0 ? this.props.itinerary.images.length - 1 : 0;
  }

  render() {
    const { images } = this.props.itinerary;

    return (
      <React.Fragment>
        <div className="itinerary-detail wrapper">
          <div className="section-title">
            <h4>Activities</h4>
          </div>
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
          {this.props.multi ? (
            <MessageFeed format="short" />
          ) : (
            <MessageFeed format="long" />
          )}
        </div>
        {this.props.multi && (
          <React.Fragment>
            <div className="section-title">
              <Link to={`/iterinaryDetails/${this.props.itinerary._id}`}>
                <p className="extra-size">Click here for more details!</p>
              </Link>
            </div>
            <div>
              <button className="view-all-button" onClick={this.props.back}>
                <i className="material-icons">expand_less</i>
                <span>close</span>
                <i className="material-icons">expand_less</i>
              </button>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

ItineraryDetails.defaultProps = {
  multi: true,
  back: () => {}
};

ItineraryDetails.propTypes = {
  itinerary: PropTypes.object.isRequired,
  back: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  multi: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  itinerary: state.itinerary
});

export default connect(mapStateToProps)(ItineraryDetails);
