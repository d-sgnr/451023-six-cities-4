import React from "react";
import PropTypes from "prop-types";
import {PropertyType} from "../../const.js";
import {capitalizeFirstLetter} from "../../utils.js";
import {connect} from "react-redux";
import {ActionCreator as AppActionCreator} from "../../reducer/app/app.js";
import {ActionCreator as DataActionCreator} from "../../reducer/data/data.js";
import {offerType} from "../../proptypes/proptypes.jsx";

const PlaceCard = (props) => {

  const {offer, offersType, onCardTitleClick, onBookmarkClick, onCardHover, onCardMouseLeave} = props;

  return (<article
    className={`${offersType === PropertyType.CITY ? `${offersType}__place-` : `${offersType}__`}card place-card`}
    onMouseEnter={() => {
      onCardHover(offer);
    }}
    onMouseLeave={onCardMouseLeave}
  >
    {offer.isPremium ? <div className="place-card__mark">
      <span>Premium</span>
    </div> : ``}
    <div className={`${offersType}__image-wrapper place-card__image-wrapper`}>
      <a href="#">
        <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt={`${offer.title} image`}/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button button` + (offer.isFavorite ? ` place-card__bookmark-button--active` : ``)}
          type="button"
          onClick={() => {
            onBookmarkClick(offer);
          }}
        >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: offer.rating * 10 + `%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#"
          onClick={() => onCardTitleClick(offer)}
        >{offer.title}</a>
      </h2>
      <p className="place-card__type">{capitalizeFirstLetter(offer.type)}</p>
    </div>
  </article>
  );
};

PlaceCard.propTypes = {
  offer: offerType.isRequired,
  offersType: PropTypes.oneOf([PropertyType.CITY, PropertyType.NEAR]).isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onCardMouseLeave: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onBookmarkClick(offer) {
    dispatch(DataActionCreator.changeFavorite(offer));
  },

  onCardTitleClick(offer) {
    dispatch(AppActionCreator.setActiveOffer(offer));
  },

  onCardHover(offer) {
    dispatch(AppActionCreator.setHoveredOffer(offer));
  },

  onCardMouseLeave() {
    dispatch(AppActionCreator.resetHoveredOffer());
  },
});

export {PlaceCard};
export default connect(null, mapDispatchToProps)(React.memo(PlaceCard));
