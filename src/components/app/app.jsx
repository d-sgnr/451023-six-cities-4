import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {placesCount, offers} = props;

  return <Main
    placesCount = {placesCount}
    offers={offers}
  />;
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
};

export default App;
