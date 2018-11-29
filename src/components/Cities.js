import React, { Component } from "react";
import axios from "axios";
import BackButton from "./BackButton";
import "./Cities.css";

// const pStyle = {
//   margin: "20px",
//   fontSize: "20px",
//   color: "red",
//   textAlign: "center"
// };

class Cities extends Component {
  state = {
    cities: []
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/cities/all`).then(res => {
      const cities = res.data;
      this.setState({ cities });
    });
  }

  render() {
    const listItems = this.state.cities.map(city => (
      <li key={city._id}>{city.name}</li>
    ));

    return (
      <div className="cities">
        <h3>List of cities</h3>

        <ul>{listItems}</ul>

        <BackButton />
      </div>
    );
  }
}

export default Cities;
