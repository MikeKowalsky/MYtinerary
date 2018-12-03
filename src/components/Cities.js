import React, { Component } from "react";
import BackButton from "./BackButton";
import { connect } from "react-redux";
import "./Cities.css";

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
    console.log(this.props);

    const filteredCities = this.props.cities.filter(
      city =>
        city.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    );

    let listItems;
    if (filteredCities.length > 0) {
      listItems = filteredCities.map(city => (
        <button key={city._id}>
          <i className="material-icons">account_balance</i>
          <p>{city.name}</p>
        </button>
      ));
    } else {
      listItems = <p>loading, plase wait ...</p>;
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
