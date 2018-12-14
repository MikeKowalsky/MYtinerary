import React, { Component, Fragment } from "react";

class Itinerarie extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export default Itinerarie;
