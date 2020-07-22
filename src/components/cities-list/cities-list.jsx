import React from "react";
import PropTypes from "prop-types";
import City from "../city/city.jsx";
import {getUniqueObjectsArray} from "../../utils.js";

import {connect} from "react-redux";

import {getCity} from "../../reducer/app/selectors.js";
import {getOffers} from "../../reducer/data/selectors.js";

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
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  citiesToShow: PropTypes.array.isRequired,
};


const mapStateToProps = (state) => {

  const offers = getOffers(state);

  const allCities = offers.map((offer) => offer.city);
  const citiesToShow = getUniqueObjectsArray(allCities, `name`).slice(0, 6);

  return {
    allCities,
    citiesToShow,
    city: getCity(state)
  };
};

export {CitiesList};
export default connect(mapStateToProps, null)(React.memo(CitiesList));
