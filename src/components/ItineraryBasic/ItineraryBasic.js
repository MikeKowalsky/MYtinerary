import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";
import {
  getUserFavorites,
  addToFavorites,
  removeFromFavorites
} from "../../actions/userActions";

class ItineraryBasic extends Component {
  // this is not idea solution, it's called so many times
  // how many itineraries is in the first city which
  // will be open, but in another case -> fetch in itimeraries page
  // in signle details i will have no favorites
  // maybe go back to token ???
  componentDidMount() {
    if (this.props.user.isAuthenticated && isEmpty(this.props.user.favorites))
      this.props.getUserFavorites();
  }

  addFavoriteClickHandler = () => {
    console.log("itiID", this.props.itinerary._id);
    this.props.addToFavorites(this.props.itinerary._id);
  };
  removeFavoriteClickHandler = () => {
    console.log("itiID", this.props.itinerary._id);
    this.props.removeFromFavorites(this.props.itinerary._id);
  };

  render() {
    const {
      user,
      name,
      rating,
      duration,
      priceRange,
      tags
    } = this.props.itinerary;

    let favIco = null;
    if (this.props.user.isAuthenticated) {
      favIco = this.props.favorites.includes(this.props.itinerary._id) ? (
        <i className="material-icons" onClick={this.removeFavoriteClickHandler}>
          favorite
        </i>
      ) : (
        <i className="material-icons" onClick={this.addFavoriteClickHandler}>
          favorite_border
        </i>
      );
    }

    return (
      <Fragment>
        <div className="itinerary-basic all-info">
          <dir className="iti-img">
            <img src={user.avatar} alt="avatar" />
            <p className="user-name">{user.name}</p>
          </dir>
          <div className="text-info">
            <div className="iti-info my-space-bet my-fav">
              <p>{name}</p>
              {favIco}
            </div>
            <div className="iti-info my-space-bet">
              <span>Ranting: {rating}</span>
              <span>{duration} Hours</span>
              <span>{priceRange}</span>
            </div>
            <div className="iti-info my-flex-start">
              {tags.map((tag, i) => (
                <span key={i}>#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

ItineraryBasic.propTypes = {
  itinerary: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getUserFavorites: PropTypes.func.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  favorites: state.user.favorites
});

export default connect(
  mapStateToProps,
  { getUserFavorites, addToFavorites, removeFromFavorites }
)(ItineraryBasic);
