import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchIterinariesForOneCity } from "../../actions/itinerariesActions";

import "./Itineraries.css";

import Header from "../../components/Header/Header";
import BackButton from "../../components/BackButton/BackButton";
import Itinerary from "../../components/Itinerary/Itinerary";

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
      <React.Fragment>
        <Header />
        <div className="itineraries">
          <h2>{cityName}</h2>

          {itinerariesTemplate}
        </div>
        <BackButton />
      </React.Fragment>
    );
  }
}

Itineraries.propTypes = {
  itineraries: PropTypes.array.isRequired
};

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
