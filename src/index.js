import React from "react";
import ReactDOM from "react-dom";
import "@sebastian-vecchio/css-reset";
import './index.sass';
import Home from "./Components/Home";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
