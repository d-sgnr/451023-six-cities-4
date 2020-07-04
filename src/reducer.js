import {extend} from "./utils.js";
import {PageType} from "./const.js";
import offers from "./mocks/offers.js";

const initialState = {
  offers,
  city: offers[0].city,
  page: PageType.INDEX,
  activeOffer: void 0,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  getOffers: (city) => ({
    type: ActionType.GET_OFFERS,
    payload: city.offers,
  }),

  setActiveOffer: (offer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offer,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload,
      });

    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload,
        page: PageType.PROPERTY,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
