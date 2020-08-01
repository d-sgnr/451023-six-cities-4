import React from "react";
import PropTypes from 'prop-types';
import {PropertyType} from "../../const.js";
import FavoritesListItem from "../favorites-list-item/favorites-list-item.jsx";

const FavoritesList = (props) => {
  const {
    offers,
    offersType,
    cities
  } = props;

  return <ul className="favorites__list">
    {cities.map((city, i) => {
      const favoriteOffersOfCity = offers.filter((offer) => {
        return offer.city.name === city.name;
      });

      return <FavoritesListItem
        offersType={offersType}
        key={i}
        offers={favoriteOffersOfCity}
        city={city}
      />;
    })}
  </ul>;
};

FavoritesList.propTypes = {
  cities: PropTypes.array.isRequired,
  offers: PropTypes.array.isRequired,
  offersType: PropTypes.oneOf([PropertyType.CITY, PropertyType.NEAR, PropertyType.FAVORITE]).isRequired,
};

export default FavoritesList;
