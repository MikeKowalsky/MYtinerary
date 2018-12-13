import React, { Component } from "react";
import BackButton from "./BackButton";
import { connect } from "react-redux";
import "./Itineraries.css";

class Itineraries extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="itineraries">
        <h2>Barcelona</h2>

        <div className="my-card">
          <div className="all-info">
            <p className="user-name">GaudiLover</p>
            <div className="text-info">
              <p>Gaudi In A Day</p>
              <div className="iti-info">
                <span>Ranting: 4.67</span>
                <span>12 Hours</span>
                <span>$$</span>
              </div>
            </div>
          </div>
          <div>
            <button className="view-all-button">View All</button>
          </div>
        </div>

        <BackButton />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // cities: state.cities
  };
};

export default connect(mapStateToProps)(Itineraries);
