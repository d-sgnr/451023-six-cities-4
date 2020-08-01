import React from "react";
import PropTypes from "prop-types";
import {PropertyType} from "../../const.js";
import {capitalizeFirstLetter} from "../../utils.js";
import {connect} from "react-redux";
import {ActionCreator as AppActionCreator} from "../../reducer/app/app.js";

import {Operation as DataOperation} from "../../reducer/data/data.js";
import {offerType} from "../../proptypes/proptypes.jsx";
import {AppRoute} from "../../const.js";
import {Link} from "react-router-dom";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";

const PlaceCard = (props) => {

  const {offer, offersType, onBookmarkClick, onCardHover, onCardMouseLeave, authorizationStatus, history} = props;

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
            if (authorizationStatus === AuthorizationStatus.AUTH) {
              onBookmarkClick(offer);
            } else {
              history.push(AppRoute.LOGIN);
            }
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
        <Link to={`${AppRoute.PROPERTY}/${offer.id}`}>
          {offer.title}
        </Link>
      </h2>
      <p className="place-card__type">{capitalizeFirstLetter(offer.type)}</p>
    </div>
  </article>
  );
};

PlaceCard.propTypes = {
  history: PropTypes.object,
  authorizationStatus: PropTypes.string.isRequired,
  offer: offerType.isRequired,
  offersType: PropTypes.oneOf([PropertyType.CITY, PropertyType.NEAR, PropertyType.FAVORITE]).isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onCardMouseLeave: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onBookmarkClick(offer) {
    dispatch(DataOperation.changeFavorite(offer));
  },

  onCardHover(offer) {
    dispatch(AppActionCreator.setHoveredOffer(offer));
  },

  onCardMouseLeave() {
    dispatch(AppActionCreator.resetHoveredOffer());
  },
});

export {PlaceCard};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(PlaceCard));
