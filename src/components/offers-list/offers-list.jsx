import React, {PureComponent} from "react";
import PlaceCard from "../place-card/place-card.jsx";
import PropTypes from 'prop-types';
import {PropertyType} from "../../const.js";

import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

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
      offersType,
      onCardTitleClick
    } = this.props;

    const getOffersListClass = (type) => {
      return `${type === PropertyType.CITY ?
        `${type}__places-` :
        `${type}__`}list places__list ${type === PropertyType.CITY ? `tabs__content` : ``}`;
    };

    const offersListClass = getOffersListClass(offersType);

    return <div className={`${offersListClass}`}>
      {offers.map((offer, i) => {
        return <PlaceCard
          onCardHover={() => {
            this.setState({
              hoveredCard: offer,
            });
          }}
          onCardTitleClick={() => {
            onCardTitleClick(offer);
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
