import React from 'react'
import BackButton from './BackButton'

const pStyle = {
    margin: '20px', 
    fontSize: '20px',
    color: 'red',
    textAlign: 'center'
}

export const Login = () => {
    return (
        <div className="Login">
            <p style={pStyle}>
                Placeholder ... . ... .. . work in progress.
            </p>
            <p style={pStyle}>
                This is Login Component
            </p>
            <BackButton />
        </div>
    )
}