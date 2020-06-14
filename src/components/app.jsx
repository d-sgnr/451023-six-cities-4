import React from "react";
import PropTypes from "prop-types";

import Main from "./main.jsx";

const App = (props) => {
  const {placesCount} = props;

  return <Main
    placesCount = {placesCount}
  />;
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
