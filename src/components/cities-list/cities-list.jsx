import React from "react";
import PropTypes from "prop-types";
import City from "../city/city.jsx";
import {getUniqueObjectsArray} from "../../utils.js";

import {connect} from "react-redux";

const CitiesList = (props) => {
  const {city, citiesToShow} = props;

  return <ul className="locations__list tabs__list">
    {citiesToShow.map((cityItem, i) => {
      return <City
        city={cityItem}
        isActive={city.name === cityItem.name}
        key={i + cityItem.name}
      />;
    })}
  </ul>;
};

CitiesList.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.array.isRequired,
  }).isRequired,
  offers: PropTypes.array.isRequired,
  citiesToShow: PropTypes.array.isRequired,
};


const mapStateToProps = (state) => {

  const allCities = state.offers.map((offer) => offer.city);
  const citiesToShow = getUniqueObjectsArray(allCities, `name`).slice(0, 6);

  return {
    allCities,
    citiesToShow,
    city: state.city
  };
};

export {CitiesList};
export default connect(mapStateToProps, null)(CitiesList);
