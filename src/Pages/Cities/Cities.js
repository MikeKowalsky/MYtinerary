import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import BackButton from "../../components/BackButton/BackButton";
import Header from "../../components/Header/Header";

import "./Cities.css";

class Cities extends Component {
  constructor(props) {
    super(props);
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
          <Link to={`/city/${city.name}`} key={city._id}>
            <button className="city-button">
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
      <React.Fragment>
        <Header />
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
        </div>
        <BackButton />
      </React.Fragment>
    );
  }
}

Cities.propTypes = {
  cities: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  cities: state.cities
});

export default connect(mapStateToProps)(Cities);
