import React, { Component } from "react";
import { CityCard } from "./CityCard";

const divStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
};

class AppSlider extends Component {
  constructor() {
    super();
    this.state = {
      indexies: [],
      cityCardSet: null
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
    // console.log(newIndexies);
    this.setState({
      indexies: newIndexies
    });
    console.log(this.state.indexies);
  };

  generateCityCardSet = initialArray => {
    this.generateNumbers();

    const newSet = this.state.indexies.map((cityIndex, index) => (
      <CityCard index={cityIndex} key={index} />
    ));

    this.setState({
      cityCardSet: newSet
    });
  };

  // componentWillMount() {
  //   console.log("will mount");
  //   this.generateCityCardSet();
  // }

  componentDidMount() {
    // this.generateCityCardSet();
    setInterval(() => {
      this.generateCityCardSet();
      // this.setState({
      //   // curTime: new Date().toLocaleString()
      // });
    }, 5000);
  }

  render() {
    return <div style={divStyle}>{this.state.cityCardSet}</div>;
  }
}

export default AppSlider;
