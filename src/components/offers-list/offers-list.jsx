import React, {PureComponent} from "react";
import PlaceCard from "../place-card/place-card.jsx";
import PropTypes from 'prop-types';

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredCard: null,
    };
  }

  render() {
    const {
      offers
    } = this.props;

    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => {
        return <PlaceCard
          onCardHover={() => {
            this.setState({
              hoveredCard: offer,
            });
          }}
          key={`${i}-${offer.title}`}
          card={offer}
        />;
      })}
    </div>;
  }

}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OffersList;


