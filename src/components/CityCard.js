import React from "react";

const rectangle = {
  height: "120px",
  width: "160px",
  backgroundColor: "rgb(255, 0, 0)",
  margin: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const CityNames = [
  "Barcelona",
  "Berlin",
  "Amsterdam",
  "Paris",
  "New York",
  "Pekin",
  "Tokyo",
  "Bangkok",
  "Singapore",
  "London"
];

export const CityCard = props => {
  return (
    <div style={rectangle}>
      <p>{CityNames[props.cityIndex]}</p>
    </div>
  );
};
