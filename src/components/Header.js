import React from "react";

const divStyle = {
  margin: "20px",
  display: "flex",
  justifyContent: "space-between"
};

const iStyle = {
  fontSize: "48px"
};

export const Header = () => {
  return (
    <div style={divStyle}>
      <i style={iStyle} className="material-icons md-48">
        account_circle
      </i>
      <i style={iStyle} className="material-icons md-48">
        menu
      </i>
    </div>
  );
};
