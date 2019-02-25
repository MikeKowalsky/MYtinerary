import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { saveNewItinerary } from "../../actions/itinerariesActions";
import Header from "../../components/Header/Header";

class NewItinerary extends Component {
  constructor() {
    super();
    this.nameEl = React.createRef();
    this.durationEl = React.createRef();
    this.priceEl = React.createRef();
    this.tagsEl = React.createRef();
    this.cityEl = React.createRef();
    this.img1NameEl = React.createRef();
    this.img1UrlEl = React.createRef();
    // this.img2NameEl = React.createRef();
    // this.img2UrlEl = React.createRef();
    // this.img3NameEl = React.createRef();
    // this.img3UrlEl = React.createRef();
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

    const imageArr = [];
    const image = {
      name: `${this.imgNameEl.current.value}`,
      url: `${this.imgUrlEl.current.value}`
    };
    imageArr.push(image);
    const images = JSON.stringify(imageArr);

    const newItinerary = {
      name: this.nameEl.current.value,
      duration: +this.durationEl.current.value,
      priceRange,
      tags: this.tagsEl.current.value,
      cityId: this.cityEl.current.value,
      images
    };

    console.log(newItinerary);

    this.props.saveNewItinerary(newItinerary);
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
                <label htmlFor="imgName">Activity no 1 name:</label>
                <input
                  type="text"
                  id="imgName"
                  ref={this.img1NameEl}
                  minLength="3"
                  maxLength="20"
                />
                <label htmlFor="imgUrl">Activity no 1 url:</label>
                <input
                  type="text"
                  id="imgUrl"
                  ref={this.img1UrlEl}
                  minLength="3"
                  maxLength="60"
                />
              </div>
              {/* <div className="form-control">
                <label htmlFor="imgName">Activity no 2 name:</label>
                <input
                  type="text"
                  id="imgName"
                  ref={this.img2NameEl}
                  minLength="3"
                  maxLength="20"
                />
                <label htmlFor="imgUrl">Activity no 2 url:</label>
                <input
                  type="text"
                  id="imgUrl"
                  ref={this.img2UrlEl}
                  minLength="3"
                  maxLength="60"
                />
              </div>
              <div className="form-control">
                <label htmlFor="imgName">Activity no 3 name:</label>
                <input
                  type="text"
                  id="imgName"
                  ref={this.img3NameEl}
                  minLength="3"
                  maxLength="20"
                />
                <label htmlFor="imgUrl">Activity no 3 url:</label>
                <input
                  type="text"
                  id="imgUrl"
                  ref={this.img3UrlEl}
                  minLength="3"
                  maxLength="60"
                />
              </div> */}
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
  cities: PropTypes.array.isRequired,
  saveNewItinerary: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cities: state.cities
});

export default connect(
  mapStateToProps,
  { saveNewItinerary }
)(NewItinerary);
