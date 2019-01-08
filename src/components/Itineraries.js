import React, { Component } from "react";
import BackButton from "./BackButton";
import Itinerary from "./Itinerary";
import { connect } from "react-redux";
import { fetchIterinariesForOneCity } from "../actions";
import "./Itineraries.css";

class Itineraries extends Component {
  componentDidMount() {
    this.props.getItineraries();
  }

  render() {
    const cityName = this.props.match.params.cityName;

    let itinerariesTemplate = "";
    if (!this.props.itineraries) {
      itinerariesTemplate = <p>Loading .....</p>;
    } else if (this.props.itineraries.length === 0) {
      itinerariesTemplate = <p>No search results ...</p>;
    } else {
      itinerariesTemplate = this.props.itineraries.map(iti => (
        <Itinerary itinerary={iti} key={iti._id} />
      ));
    }

    return (
      <div className="itineraries">
        <h2>{cityName}</h2>

        {itinerariesTemplate}

        <BackButton />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  getItineraries: () => dispatch(fetchIterinariesForOneCity(props))
});

const mapStateToProps = state => {
  return {
    itineraries: state.itineraries
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Itineraries);
