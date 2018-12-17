import React, { Component } from "react";
import BackButton from "./BackButton";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Cities.css";

//test
// import { fetchIterinariesForOneCity } from "../actions";

class Cities extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  updateSearch = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    let listItems;

    if (!this.props.cities) {
      listItems = <p>loading, please wait ...</p>;
    } else {
      // console.log(this.props);
      const filteredCities = this.props.cities.filter(
        city =>
          city.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1
      );

      if (filteredCities.length > 0) {
        listItems = filteredCities.map(city => (
          <Link to={`/city/oneCity/${city.name}`} key={city._id}>
            <button
              className="city-button"
              // onClick={dispatch =>
              //   dispatch(fetchIterinariesForOneCity(city.name))
              // }
            >
              <i className="material-icons">account_balance</i>
              <p>{city.name}</p>
            </button>
          </Link>
        ));
      } else {
        listItems = <p>there is no city like that</p>;
      }
    }

    return (
      <div className="cities">
        <form>
          <input
            type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            placeholder="Search for ..."
          />
        </form>

        {listItems}

        <BackButton />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities
  };
};

export default connect(mapStateToProps)(Cities);
