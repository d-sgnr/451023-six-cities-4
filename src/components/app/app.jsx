import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const cardTitleHandler = () => {};

const App = (props) => {
  const {placesCount} = props;

  return <Main
    placesCount = {placesCount}
    onCardTitleClick = {cardTitleHandler}
  />;
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
