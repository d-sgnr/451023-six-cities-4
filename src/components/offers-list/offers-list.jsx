import React, {PureComponent} from "react";
import PlaceCard from "../place-card/place-card.jsx";
import PropTypes from 'prop-types';
import {PropertyType} from "../../const.js";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredCard: null,
    };
  }

  render() {
    const {
      offers,
      offersType
    } = this.props;

    return <div className={
      `${offersType === PropertyType.CITY ? `${offersType}__places-` : `${offersType}__`}list places__list
      ${offersType === PropertyType.CITY ? `tabs__content` : ``}`}
    >
      {offers.map((offer, i) => {
        return <PlaceCard
          onCardHover={() => {
            this.setState({
              hoveredCard: offer,
            });
          }}
          offersType={offersType}
          key={`${i}-${offer.title}`}
          card={offer}
        />;
      })}
    </div>;
  }

}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  offersType: PropTypes.oneOf([PropertyType.CITY, PropertyType.NEAR]).isRequired
};

export default OffersList;


