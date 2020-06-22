import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);

    const {card} = this.props;

    this.state = {
      isBookmarked: card.isBookmarked,
    };
  }

  render() {

    const {onCardHover, card} = this.props;

    return <article className="cities__place-card place-card"
      onMouseEnter={onCardHover}
    >
      {card.isPremium ? <div className="place-card__mark">
        <span>Premium</span>
      </div> : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={`img/${card.picture}`}width="260" height="200" alt={`${card.title} image`}/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button` + (this.state.isBookmarked ? ` place-card__bookmark-button--active` : ``)}
            type="button"
            onClick={this.bookmarkPlace.bind(this)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: card.rating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{card.title}</a>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>;
  }

  bookmarkPlace() {
    this.setState({
      isBookmarked: !this.state.isBookmarked,
    });
  }
}

PlaceCard.propTypes = {
  onCardHover: PropTypes.func.isRequired,
  card: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PlaceCard;