import React from "react";
import PropTypes from "prop-types";

const City = (props) => {
  const {city, isActive, onCityClick} = props;

  return <li className="locations__item">
    <a className={`locations__item-link tabs__item ${isActive ? `tabs__item--active` : ``}`} href="#"
      onClick={onCityClick}
    >
      <span>{city.name}</span>
    </a>
  </li>;
};

City.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.array.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default City;
