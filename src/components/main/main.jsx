import React from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list.jsx";
import Map from "../map/map.jsx";
import CitiesList from "../cities-list/cities-list.jsx";
import NoPlaces from "../no-places/no-places.jsx";
import Sorting from "../sorting/sorting.jsx";

import {PropertyType} from "../../const.js";
import {connect} from "react-redux";

import {getSortedOffers, getFilteredOffers, getPlacesCoordinates} from "../../utils.js";

const Main = (props) => {
  const {sortedOffers, city, placesCoordinates} = props;

  return <React.Fragment>
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
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
      <main className={`page__main page__main--index ${sortedOffers.length === 0 ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList/>
          </section>
        </div>
        <div className="cities">
          {sortedOffers.length === 0 ?
            <NoPlaces/> :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{sortedOffers.length} places to stay in {city.name}</b>
                <Sorting/>
                <OffersList
                  city={city}
                  offers={sortedOffers}
                  offersType={PropertyType.CITY}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    city={city}
                    coordinates={placesCoordinates}
                  />
                </section>
              </div>
            </div>
          }
        </div>
      </main>
    </div>
  </React.Fragment>;
};

Main.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.array.isRequired,
  }).isRequired,
  offers: PropTypes.array.isRequired,
  sortedOffers: PropTypes.array.isRequired,
  placesCoordinates: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {

  const offersToShow = getFilteredOffers(state.offers, state.city);
  const coordinatesToShow = getPlacesCoordinates(offersToShow);

  const sortedOffers = getSortedOffers(offersToShow, state.activeSortType);

  return {
    offers: state.offers,
    city: state.city,
    placesCoordinates: coordinatesToShow,
    activeSortType: state.activeSortType,
    sortedOffers
  };
};

export {Main};
export default connect(mapStateToProps)(Main);
