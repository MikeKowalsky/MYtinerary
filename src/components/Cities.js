import React from 'react';
import BackButton from './BackButton'

const pStyle = {
    margin: '20px', 
    fontSize: '20px',
    color: 'red',
    textAlign: 'center'
}

export const Cities = () => {
    return (
        <div className="Cities">
            <p style={pStyle}>
                Placeholder ... . ... .. . work in progress.
            </p>
            <p style={pStyle}>
                This is Cities Component
            </p>
            <BackButton />
        </div>
    )
}