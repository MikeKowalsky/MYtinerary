import React from "react";
import { CityCard } from "./CityCard";

const divStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
};

const indexies = [];
while (indexies.length < 4) {
  const randomNumber = parseInt(Math.random() * 10);
  if (!indexies.includes(randomNumber)) {
    indexies.push(randomNumber);
  }
}

const slider = indexies.map((cityIndex, index) => (
  <CityCard cityIndex={cityIndex} key={index} />
));

export const AppSlider = () => {
  return <div style={divStyle}>{slider}</div>;
};
