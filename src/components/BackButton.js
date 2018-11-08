import React, { Component } from 'react';

const divStyle = {
    display: 'flex',
    justifyContent: 'center'
}

const buttonStyle = {
    margin: '10px',
    padding: '10px',
    backgroundColor: 'lightgrey',
    border: '1px solid black',
    borderRadius: '3px'
}

class BackButton extends Component {
    static contextTypes = {
      router: () => null, // replace with PropTypes.object if you use them
      //it was router: () => true, but it didn't work and now is fine
    }

    render() {
      return (
        <div style={ divStyle }>
            <button
                style={ buttonStyle }
                onClick={ this.context.router.history.goBack }>
                Back
            </button>
        </div>
      )
    }
}

export default BackButton;