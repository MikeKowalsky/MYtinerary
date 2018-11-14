import React from "react";

import ams from "../assets/cities_min/ams.jpg";
import ban from "../assets/cities_min/ban.jpg";
import bar from "../assets/cities_min/bar.jpg";
import ber from "../assets/cities_min/ber.jpg";
import lon from "../assets/cities_min/lon.jpg";
import nyc from "../assets/cities_min/nyc.jpg";
import par from "../assets/cities_min/par.jpg";
import pek from "../assets/cities_min/pek.jpg";
import sin from "../assets/cities_min/sin.jpg";
import tok from "../assets/cities_min/tok.jpg";

const citiesMin = [ams, ban, bar, ber, lon, nyc, par, pek, sin, tok];

const rectangle = {
  height: "120px",
  width: "160px",
  // backgroundColor: "rgba(255, 0, 0, 0.6)",
  margin: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative"
};

const styleImg = {
  height: "120px",
  width: "160px",
  position: "absolute"
};

const styleP = {
  margin: 0,
  width: "160px",
  fontSize: "25px",
  color: "white",
  fontWeight: "bold",
  position: "absolute",
  backgroundColor: "rgba(0, 0, 0, 0.4)"
};

const cityNames = [
  "Amsterdam",
  "Bangkok",
  "Barcelona",
  "Berlin",
  "London",
  "New York",
  "Paris",
  "Pekin",
  "Singapore",
  "Tokyo"
];

export const CityCard = props => {
  console.log(props.index);
  return (
    <div style={rectangle}>
      <img style={styleImg} src={citiesMin[props.index]} alt="" />
      <p style={styleP}>{cityNames[props.index]}</p>
    </div>
  );
};
