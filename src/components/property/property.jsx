import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import {capitalizeFirstLetter} from "../../utils.js";
import Map from "../map/map.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import {offerType} from "../../proptypes/proptypes.jsx";

import {PropertyType} from "../../const.js";
import {connect} from "react-redux";
import {getUserName, getActiveOffer} from "../../reducer/app/selectors.js";

import {getComments, getNearOffers} from "../../reducer/data/selectors.js";

import {getPlacesCoordinates} from "../../utils.js";

import Header from "../header/header.jsx";
import MainNav from "../main-nav/main-nav.jsx";
import HeaderLogoWrap from "../header-logo-wrap/header-logo-wrap.jsx";
import Logo from "../logo/logo.jsx";

import {ActionCreator as DataActionCreator} from "../../reducer/data/data.js";
import {ActionCreator as AppActionCreator} from "../../reducer/app/app.js";

import {Operation as DataOperation} from "../../reducer/data/data.js";

const getDigitalRating = (starredRating) => {
  return (starredRating / 20).toFixed(1);
};

const MAX_NEAR_OFFERS = 3;

class Property extends PureComponent {
  constructor(props) {
    super(props);
  }

  _fetchData(fetchComments, fetchNearOffers, offerId) {
    fetchComments(offerId);
    fetchNearOffers(offerId);
  }

  componentDidMount() {
    const {offer, loadComments, loadNearOffers} = this.props;
    this._fetchData(loadComments, loadNearOffers, offer.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.offer.id !== this.props.offer.id) {
      const {offer, loadComments, loadNearOffers} = this.props;
      this._fetchData(loadComments, loadNearOffers, offer.id);
    }
  }

  render() {
    const {offer, nearOffers, nearCoordinates, onBookmarkClick, userName, reviews} = this.props;

    const digitalRating = getDigitalRating(offer.rating * 10);

    const descriptionSentences = offer.description.replace(/([.?!])\s*(?=[A-Z])/g, `$1|`).split(`|`);

    return (
      <div className="page">
        <Header>
          <HeaderLogoWrap>
            <Logo/>
          </HeaderLogoWrap>
          <MainNav
            userName={userName}
          />
        </Header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.images.map((picture, i) => {
                  return <div className="property__image-wrapper"
                    key={`${i}-${picture}`}
                  >
                    <img className="property__image" src={picture} alt="Photo studio"/>
                  </div>;
                })}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>
                  <button className="property__bookmark-button button"
                    type="button"
                    onClick={() => onBookmarkClick(offer)}
                  >
                    <svg className="property__bookmark-icon" width="31" height="33" style={{stroke: (offer.isFavorite ? `#4481c3` : ``), fill: (offer.isFavorite ? `#4481c3` : ``)}}>
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: offer.rating * 10 + `%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">
                    {digitalRating}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {capitalizeFirstLetter(offer.type)}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.goods.map((appliance, i) => {
                      return <li
                        className="property__inside-item"
                        key={`${i}-${appliance}`}>{appliance}</li>;
                    })}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      Angelina
                    </span>
                  </div>
                  <div className="property__description">
                    {descriptionSentences.map((paragraph, i) => {
                      return <p className="property__text"
                        key={`${i}-${paragraph}`}
                      >{paragraph}</p>;
                    })}
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ReviewsList
                    reviews={reviews}
                  />
                  <form className="reviews__form form" action="#" method="post">
                    <label className="reviews__label form__label" htmlFor="review">Your review</label>
                    <div className="reviews__rating-form form__rating">
                      <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
                      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
                      <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
                      <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
                      <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
                      <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>
                    </div>
                    <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                    <div className="reviews__button-wrapper">
                      <p className="reviews__help">
                        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                      </p>
                      <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                activeOffer={offer}
                city={offer.city}
                coordinates={nearCoordinates}
              />
            </section>
          </section>
          {nearOffers.length > 0 ?
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <OffersList
                  city={offer.city}
                  offers={nearOffers}
                  offersType={PropertyType.NEAR}
                />
              </section>
            </div> : ``
          }
        </main>
      </div>
    );
  }
}

Property.propTypes = {
  offer: offerType,
  nearOffers: PropTypes.array.isRequired,
  nearCoordinates: PropTypes.array.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  loadComments: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
  loadNearOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {

  const nearOffers = getNearOffers(state).slice(0, MAX_NEAR_OFFERS);

  const comments = getComments(state);

  const activeOffer = getActiveOffer(state);

  const userName = getUserName(state);

  const nearCoordinates = getPlacesCoordinates(nearOffers);

  return {
    offer: activeOffer,
    nearCoordinates,
    nearOffers,
    userName,
    reviews: comments,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onBookmarkClick(offer) {
    dispatch(DataActionCreator.changeFavorite(offer));
    dispatch(AppActionCreator.changeFavoriteActive(offer));
  },
  loadComments(id) {
    dispatch(DataOperation.loadComments(id));
  },
  loadNearOffers(id) {
    dispatch(DataOperation.loadNearOffers(id));
  },
});

export {Property};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Property));
