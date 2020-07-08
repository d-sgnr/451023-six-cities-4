import {extend} from "./utils.js";
import {PageType} from "./const.js";
import offers from "./mocks/offers.js";

const getFilteredOffers = (allOffers, city) => {
  return allOffers.filter((offer) => {
    return offer.city.name === city.name;
  });
};

const getPlacesCoordinates = (shownOffers) => {
  return shownOffers.map(({coordinates}) => coordinates);
};

const filteredOffersOnStart = getFilteredOffers(offers, offers[0].city);
const placesCoordinatesOnStart = getPlacesCoordinates(filteredOffersOnStart);

const initialState = {
  offers,
  city: offers[0].city,
  page: PageType.INDEX,
  activeOffer: offers[0],
  offersToShow: filteredOffersOnStart,
  placesCoordinates: placesCoordinatesOnStart,
  nearOffers: offers,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  CHANGE_BOOKMARK: `CHANGE_BOOKMARK`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  setActiveOffer: (offer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offer,
  }),

  changeBookmark: (offer) => ({
    type: ActionType.CHANGE_BOOKMARK,
    payload: offer,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      const city = action.payload;

      const filteredOffers = getFilteredOffers(state.offers, city);
      const coordinatesToShow = getPlacesCoordinates(filteredOffers);

      return extend(state, {
        city: action.payload,
        offersToShow: filteredOffers,
        placesCoordinates: coordinatesToShow,
      });

    case ActionType.CHANGE_BOOKMARK:

      console.log(state.offers);

      const newOffers = state.offers.map((offer) => {
        if (offer === action.payload) {
          return extend(offer, {
            isBookmarked: !offer.isBookmarked,
            title: `!offer.isBookmarked`,
          });
        }
        return offer;
      });

      console.log(newOffers);

      return extend(state, {
        offers: newOffers,
      });

    case ActionType.SET_ACTIVE_OFFER:
      const offer = action.payload;

      const nearOffersToShow = getFilteredOffers(state.offers, offer.city);
      const nearCoordinatesToShow = getPlacesCoordinates(nearOffersToShow);

      return extend(state, {
        activeOffer: action.payload,
        page: PageType.PROPERTY,
        nearOffers: nearOffersToShow,
        nearCoordinates: nearCoordinatesToShow,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
