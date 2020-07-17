import React from "react";
import PlaceCard from "../place-card/place-card.jsx";
import PropTypes from 'prop-types';
import {PropertyType} from "../../const.js";

const getOffersListClass = (type) => {
  return `${type === PropertyType.CITY ?
    `${type}__places-` :
    `${type}__`}list places__list ${type === PropertyType.CITY ? `tabs__content` : ``}`;
};

const OffersList = (props) => {
  const {
    offers,
    offersType
  } = props;

  const offersListClass = getOffersListClass(offersType);

  return <div className={`${offersListClass}`}>
    {offers.map((offer, i) => {
      return <PlaceCard
        offersType={offersType}
        key={`${i}-${offer.title}`}
        offer={offer}
      />;
    })}
  </div>;

};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  offersType: PropTypes.oneOf([PropertyType.CITY, PropertyType.NEAR]).isRequired,
};

export default React.memo(OffersList);
