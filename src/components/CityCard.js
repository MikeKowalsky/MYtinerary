import React from "react";

const rectangle = {
  height: "120px",
  width: "150px",
  backgroundColor: "red"
};

export const CityCard = props => {
  return <div style={rectangle}>{props.letter}</div>;
};
