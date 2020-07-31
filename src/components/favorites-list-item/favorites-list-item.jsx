import React from "react";
import PlaceCard from "../place-card/place-card.jsx";
import PropTypes from 'prop-types';
import {PropertyType} from "../../const.js";
import {cityType} from "../../proptypes/proptypes.jsx";

const FavoritesListItem = (props) => {
  const {
    city,
    offers,
    offersType
  } = props;

  return <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{city.name}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {offers.map((offer, i) => {
        return <PlaceCard
          key={i}
          offer={offer}
          offersType={offersType}
        />;
      })}
    </div>
  </li>;
};

FavoritesListItem.propTypes = {
  city: cityType,
  offers: PropTypes.array.isRequired,
  offersType: PropTypes.oneOf([PropertyType.CITY, PropertyType.NEAR, PropertyType.FAVORITE]).isRequired,
};

export default FavoritesListItem;
