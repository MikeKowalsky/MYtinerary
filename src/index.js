import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Cities } from './components/Cities'
import { Login } from './components/Login'
import { CreateAccount } from './components/CreateAccount'

import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';



const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/cities" component={Cities} />
            <Route path="/login" component={Login} />
            <Route path="/createAccount" component={CreateAccount} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
