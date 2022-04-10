import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import App from "./App";
import store from "./redux/store";
import langtranslation from "./i18n/index";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icons/css/flag-icons.min.css";
import "./assets/css/style.css";
langtranslation();

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
