import React from "react";
import PropTypes from 'prop-types';
import {PropertyType} from "../../const.js";
import FavoritesListItem from "../favorites-list-item/favorites-list-item.jsx";
import {getUniqueObjectsArray} from "../../utils.js";

const FavoritesList = (props) => {
  const {
    offers,
    offersType
  } = props;

  const allCities = offers.map((offer) => {
    return offer.city;
  });

  const favoriteCities = getUniqueObjectsArray(allCities, `name`);

  return <ul className="favorites__list">
    {favoriteCities.map((city, i) => {
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
  offers: PropTypes.array.isRequired,
  offersType: PropTypes.oneOf([PropertyType.CITY, PropertyType.NEAR, PropertyType.FAVORITE]).isRequired,
};

export default FavoritesList;
