import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import combinedReducer from "./combinedReducer";

// const reducer = function(...args) {
//   console.log("Reducer was called with args", args);
// };

export default function(state = {}) {
  //state is empty
  const store = createStore(combinedReducer, state, devToolsEnhancer());

  return store;
}
