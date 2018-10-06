import React, { Component } from "react";
import ReactDOM from "react-dom";
import AvengersComponent from "./app/AvengersComponent.jsx";
import AvengersReducers from "./app/AvengersReducers.jsx";

import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(AvengersReducers, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <AvengersComponent/>
  </Provider>
  , document.getElementById("root")
);