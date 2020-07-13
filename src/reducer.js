import {extend} from "./utils.js";
import {PageType, SortType} from "./const.js";
import {replaceItemInArray} from "./utils.js";
import offers from "./mocks/offers.js";

const initialState = {
  offers,
  city: offers[0].city,
  page: PageType.INDEX,
  activeOffer: offers[0],
  activeSortType: SortType.POPULAR,
  hoveredOffer: void 0,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  CHANGE_BOOKMARK: `CHANGE_BOOKMARK`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  SET_HOVERED_OFFER: `SET_HOVERED_OFFER`,
  RESET_HOVERED_OFFER: `RESET_HOVERED_OFFER`,
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

  changeSorting: (sortType) => ({
    type: ActionType.CHANGE_SORTING,
    payload: sortType,
  }),

  setHoveredOffer: (offer) => ({
    type: ActionType.SET_HOVERED_OFFER,
    payload: offer,
  }),

  resetHoveredOffer: () => ({
    type: ActionType.RESET_HOVERED_OFFER,
    payload: void 0,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.CHANGE_BOOKMARK:

      const newOffers = replaceItemInArray(state.offers, action.payload, `isBookmarked`);

      const newActiveOffer = extend(state.activeOffer, {
        isBookmarked: !state.activeOffer.isBookmarked,
      });

      return extend(state, {
        activeOffer: newActiveOffer,
        offers: newOffers,
      });

    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload,
        page: PageType.PROPERTY,
      });

    case ActionType.CHANGE_SORTING:
      return extend(state, {
        activeSortType: action.payload,
      });

    case ActionType.SET_HOVERED_OFFER:
      return extend(state, {
        hoveredOffer: action.payload,
      });

    case ActionType.RESET_HOVERED_OFFER:
      return extend(state, {
        hoveredOffer: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
