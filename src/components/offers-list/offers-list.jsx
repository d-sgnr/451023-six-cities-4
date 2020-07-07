import React from "react";
import PlaceCard from "../place-card/place-card.jsx";
import PropTypes from 'prop-types';
import {PropertyType} from "../../const.js";

import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

const OffersList = (props) => {
  const {
    offers,
    offersType,
    onCardTitleClick
  } = props;

  const getOffersListClass = (type) => {
    return `${type === PropertyType.CITY ?
      `${type}__places-` :
      `${type}__`}list places__list ${type === PropertyType.CITY ? `tabs__content` : ``}`;
  };

  const offersListClass = getOffersListClass(offersType);

  return <div className={`${offersListClass}`}>
    {offers.map((offer, i) => {
      return <PlaceCard
        onCardTitleClick={() => {
          onCardTitleClick(offer);
        }}
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
  onCardTitleClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onCardTitleClick(offer) {
    dispatch(ActionCreator.setActiveOffer(offer));
  },
});

export {OffersList};
export default connect(null, mapDispatchToProps)(OffersList);
