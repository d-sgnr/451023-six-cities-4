import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

import offers from "./mocks/offers.js";

const ROOT_ELEMENT = document.getElementById(`root`);

const settings = {
  placesCount: 341,
};

ReactDOM.render(
    <App
      placesCount={settings.placesCount}
      offers={offers}
    />, ROOT_ELEMENT
);
