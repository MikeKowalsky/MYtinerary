import React from "react";
import { CityCard } from "./CityCard";

const divStyle = {
  display: "flex",
  flexWrap: "wrap"
};

const data = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const slider = data.map(letter => {
  return <CityCard letter={letter} />;
});

export const AppSlider = () => {
  return <div style={divStyle}>{slider}</div>;
  // return <CityCard letter={"a"} />;
};
