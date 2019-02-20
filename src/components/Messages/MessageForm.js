import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";

class MessageForm extends Component {
  constructor() {
    super();

    this.textareaEl = React.createRef();
  }

  submitHandler(event) {
    event.preventDefault();
    const text = this.textareaEl.current.value;

    if (isEmpty(text)) return alert("Text field cannot be empty!");
  }

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.submitHandler} className="user-form">
          <div className="form-control">
            <label htmlFor="text" />
            <textarea
              name="text"
              id="text"
              cols="40"
              rows="4"
              ref={this.textareaEl}
            />
          </div>
          <div className="form-actions">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default MessageForm;
