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
    // const listItems = this.state.cities.map(city => (
    //   <div>
    //     <p key={city._id}>{city.name}</p>
    //   </div>
    // ));

    const listItems = this.state.cities.map(city => (
      <button key={city._id}>
        <i class="material-icons">account_balance</i>
        <p>{city.name}</p>
      </button>
    ));

    return (
      <div className="cities">
        {listItems}

        <BackButton />
      </div>
    );
  }
}

export default Cities;
