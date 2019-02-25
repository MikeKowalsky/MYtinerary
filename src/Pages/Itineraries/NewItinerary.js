import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "../../components/Header/Header";

class NewItinerary extends Component {
  constructor() {
    super();
    this.nameEl = React.createRef();
    this.durationEl = React.createRef();
    this.priceEl = React.createRef();
    this.tagsEl = React.createRef();
    this.cityEl = React.createRef();
    this.imgNameEl = React.createRef();
    this.imgUrlEl = React.createRef();
  }

  submitHandler = event => {
    event.preventDefault();

    let priceRange = "";
    if (+this.priceEl.current.value > 3) {
      priceRange = "$$$";
    } else if (+this.priceEl.current.value <= 0) {
      priceRange = "$";
    } else {
      for (let i = 1; i <= +this.priceEl.current.value; i++) {
        priceRange = priceRange.concat("$");
      }
    }

    const images = `[{"name":${this.imgNameEl.current.value}, "url":${
      this.imgUrlEl.current.value
    }}]`;

    const newItinerary = {
      name: this.nameEl.current.value,
      duration: +this.durationEl.current.value,
      priceRange,
      tags: this.tagsEl.current.value,
      cityId: this.cityEl.current.value,
      images
    };

    console.log(newItinerary);
  };

  render() {
    return (
      <div>
        <React.Fragment>
          <Header />
          <div className="single-iti-wrapper">
            <h1>Create new itinerary</h1>

            <form onSubmit={this.submitHandler}>
              <div className="form-control">
                <label htmlFor="name">Itinerary name: </label>
                <input
                  type="text"
                  id="name"
                  ref={this.nameEl}
                  minLength="4"
                  maxLength="20"
                />
              </div>
              <div className="form-control">
                <label htmlFor="duration">Tour duration: [in hours]</label>
                <input type="number" id="duration" ref={this.durationEl} />
              </div>
              <div className="form-control">
                <label htmlFor="price">
                  Proce range: [1 - cheap / 2 - moderate / 3 - expensive ]
                </label>
                <input type="number" id="price" ref={this.priceEl} />
              </div>
              <div className="form-control">
                <label htmlFor="tags">
                  Add tags: [words with # eg. #drinks #food]
                </label>
                <input
                  type="text"
                  id="tags"
                  ref={this.tagsEl}
                  minLength="3"
                  maxLength="30"
                />
              </div>
              <div className="form-control selectBlock">
                <label htmlFor="city">Select city:</label>
                {/* <input type="select" id="city" ref={this.cityEl} /> */}
                <select name="city" id="city" ref={this.cityEl}>
                  {this.props.cities.map(city => (
                    <option value={city._id} key={city._id}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control">
                <label htmlFor="imgName">Activity name:</label>
                <input
                  type="text"
                  id="imgName"
                  ref={this.imgNameEl}
                  minLength="3"
                  maxLength="20"
                />
                <label htmlFor="imgUrl">URL:</label>
                <input
                  type="text"
                  id="imgUrl"
                  ref={this.imgUrlEl}
                  minLength="3"
                  maxLength="50"
                />
              </div>
              <div className="form-actions">
                <button type="submit">Create!</button>
              </div>
            </form>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

NewItinerary.propTypes = {
  cities: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  cities: state.cities
});

export default connect(mapStateToProps)(NewItinerary);
