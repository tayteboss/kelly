import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./styles.js";

ReactDOM.render(
  <GlobalStyles>
    <App />
  </GlobalStyles>,
  document.getElementById("root")
);
