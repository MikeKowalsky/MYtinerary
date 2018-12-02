import React, { Component } from "react";
import axios from "axios";
import BackButton from "./BackButton";
import "./Cities.css";

class Cities extends Component {
  constructor() {
    super();
    this.state = {
      cities: [],
      search: ""
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/cities/all`).then(res => {
      const cities = res.data;
      this.setState({ cities });
    });
  }

  updateSearch = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const filteredCities = this.state.cities.filter(
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

export default Cities;
