import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMessagesItinerary } from "../../actions/messagesActions";

class MessageFeed extends Component {
  componentDidMount() {
    if (
      this.props.messages.length === 0 ||
      this.props.messages[0].itineraryId !== this.props.itinerary._id
    )
      this.props.getMessagesItinerary(this.props.itinerary._id);
  }

  render() {
    return (
      <div>
        <div style={{ display: "block", textAlign: "center" }}>
          <h4>Messages</h4>
          <div>
            {this.props.messages.map(message => (
              <div key={message._id}>
                <h5>{message.name}</h5>
                <p>{message.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

MessageFeed.propTypes = {
  format: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  itinerary: PropTypes.object.isRequired,
  getMessagesItinerary: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  messages: state.messages,
  itinerary: state.itinerary
});

export default connect(
  mapStateToProps,
  { getMessagesItinerary }
)(MessageFeed);
