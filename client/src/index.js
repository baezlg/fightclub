import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import langtranslation from "./i18n/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
langtranslation();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
