import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";

// import Cities from "./components/Cities";
// import { Login } from "./components/Login";
// import { SignUp } from "./components/SignUp";

// import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// import { Provider } from "react-redux";
import configureStore from "./store";
import Root from "./components/Root";

// const routing = (
//   <Router>
//     <div>
//       <Route exact path="/" component={App} />
//       <Route path="/cities" component={Cities} />
//       <Route path="/login" component={Login} />
//       <Route path="/signup" component={SignUp} />
//     </div>
//   </Router>
// );

// const root = ({ store }) => (
//   <Provider store={store}>
//     <Router>
//       <div>
//         <Route exact path="/" component={App} />
//         <Route path="/cities" component={Cities} />
//         <Route path="/login" component={Login} />
//         <Route path="/signup" component={SignUp} />
//       </div>
//     </Router>
//   </Provider>
// );

const store = configureStore({});

// ReactDOM.render(
//   routing,
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
