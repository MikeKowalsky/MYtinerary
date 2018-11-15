import React, { Component } from "react";
import { CityCard } from "./CityCard";

const divStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
};

class AppSliderDynamic extends Component {
  constructor() {
    super();
    this.state = {
      cityCardSet: this.generateCityCardSet()
    };
  }

  generateNumbers = () => {
    const newIndexies = [];
    while (newIndexies.length < 4) {
      const randomNumber = parseInt(Math.random() * 10);
      if (!newIndexies.includes(randomNumber)) {
        newIndexies.push(randomNumber);
      }
    }
    return newIndexies;
  };

  generateCityCardSet = () => {
    const newIndexies = this.generateNumbers();
    // console.log(newIndexies);
    const newSet = newIndexies.map((cityIndex, index) => (
      <CityCard index={cityIndex} key={index} />
    ));
    return newSet;
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        cityCardSet: this.generateCityCardSet()
      });
    }, 5000);
  }

  render() {
    return <div style={divStyle}>{this.state.cityCardSet}</div>;
  }
}

export default AppSliderDynamic;
