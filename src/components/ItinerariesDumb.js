// import React, { Component } from "react";
// import BackButton from "./BackButton";
// import Itinerary from "./Itinerary";
// import { connect } from "react-redux";
// import "./Itineraries.css";
// import { fetchIterinariesForOneCity } from "../actions";

// class Itineraries extends Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);
//     this.state = {};
//     console.log(this.state);
//   }

//   render() {
//     console.log(this.props.itineraries);

//     const cityName = this.props.match.params.cityName;
//     console.log(cityName);

//     return (
//       <div className="itineraries">
//         <h2>{this.props.match.params.cityName}</h2>

//         {/* <ul>{this.state.itineraries.map(iti => `<li>{iti.name}</li>`)}</ul> */}

//         <Itinerary />

//         <BackButton />
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch, cityName) => ({
//   get: dispatch(fetchIterinariesForOneCity(cityName))
// });

// // const mapDispatchToProps = {
// //   fetchIterinariesForOneCity
// // };

// const mapStateToProps = state => {
//   return {
//     itineraries: state.itineraries
//   };
// };

// // const mapDispatchToProps = dispatch => {
// //   return {
// //     get: cityName => dispatch(fetchIterinariesForOneCity(cityName))
// //   };
// // };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Itineraries);
// // export default Itineraries;
