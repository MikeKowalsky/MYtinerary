import React from "react";

const divStyle = {
  margin: "20px",
  fontSize: "48px",
  display: "flex",
  justifyContent: "space-between"
};

export const Header = () => {
  return (
    <div style={divStyle}>
      <i class="material-icons md-48">account_circle</i>
      <i class="material-icons md-48">menu</i>
    </div>
  );
};
