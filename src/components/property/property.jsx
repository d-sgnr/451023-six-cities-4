import React, {} from "react";
import PropTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import reviews from "../../mocks/reviews.js";
import Map from "../map/map.jsx";
import OffersList from "../offers-list/offers-list.jsx";

import {PropertyType} from "../../const.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

import {getFilteredOffers, getPlacesCoordinates} from "../../utils.js";

const getDigitalRating = (starredRating) => {
  return (starredRating / 20).toFixed(1);
};

const Property = (props) => {

  const {offer, nearOffers, nearCoordinates, onBookmarkClick} = props;

  const digitalRating = getDigitalRating(offer.rating);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.pictures.map((picture, i) => {
                return <div className="property__image-wrapper"
                  key={`${i}-${picture}`}
                >
                  <img className="property__image" src={`img/${picture}`} alt="Photo studio"/>
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
                  <svg className="property__bookmark-icon" width="31" height="33" style={{stroke: (offer.isBookmarked ? `#4481c3` : ``), fill: (offer.isBookmarked ? `#4481c3` : ``)}}>
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: offer.rating + `%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {digitalRating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedroomsCount} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.guestsCount} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.appliances.map((appliance, i) => {
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
                  {offer.description.map((paragraph, i) => {
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
              city={offer.city}
              coordinates={nearCoordinates}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList
              city={offer.city}
              offers={nearOffers}
              offersType={PropertyType.NEAR}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

Property.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    coordinates: PropTypes.array.isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      coordinates: PropTypes.array.isRequired,
    }).isRequired,
    pictures: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    description: PropTypes.array.isRequired,
    bedroomsCount: PropTypes.number.isRequired,
    guestsCount: PropTypes.number.isRequired,
    appliances: PropTypes.array.isRequired,
    host: PropTypes.shape({
      picture: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired,
    }),
  }).isRequired,
  nearOffers: PropTypes.array.isRequired,
  nearCoordinates: PropTypes.array.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {

  const nearOffers = getFilteredOffers(state.offers, state.city);
  const nearCoordinates = getPlacesCoordinates(nearOffers);

  return {
    offer: state.activeOffer,
    offers: state.offers,
    onBookmarkClick: state.onBookmarkClick,
    nearCoordinates,
    nearOffers,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onBookmarkClick(offer) {
    dispatch(ActionCreator.changeBookmark(offer));
  },
});

export {Property};
export default connect(mapStateToProps, mapDispatchToProps)(Property);
