import {extend} from "../../utils.js";
import {SortType, PageType} from "../../const.js";

const initialCity = {
  name: `Amsterdam`,
  location: {
    latitude: 52.373057,
    longitude: 4.892557,
    zoom: 10,
  },
};

const initialState = {
  city: initialCity,
  page: PageType.INDEX,
  activeSortType: SortType.POPULAR,
  hoveredOffer: null,
  userName: `oliver.conner@gmail.com`,
  activeOffer: null,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_HOVERED_OFFER: `SET_HOVERED_OFFER`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  RESET_HOVERED_OFFER: `RESET_HOVERED_OFFER`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  CHANGE_FAVORITE_ACTIVE: `CHANGE_FAVORITE_ACTIVE`,
  GO_TO_INDEX: `GO_TO_INDEX`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
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
    payload: null,
  }),

  setActiveOffer: (offer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offer,
  }),

  goToIndex: () => ({
    type: ActionType.GO_TO_INDEX,
    payload: null,
  }),

  changeFavoriteActive: (offer) => ({
    type: ActionType.CHANGE_FAVORITE_ACTIVE,
    payload: offer,
  }),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.CHANGE_SORTING:
      return extend(state, {
        activeSortType: action.payload,
      });

    case ActionType.RESET_HOVERED_OFFER:
      return extend(state, {
        hoveredOffer: action.payload,
      });

    case ActionType.SET_HOVERED_OFFER:
      return extend(state, {
        hoveredOffer: action.payload,
      });

    case ActionType.SET_ACTIVE_OFFER:

      return extend(state, {
        activeOffer: action.payload,
        page: PageType.PROPERTY,
      });

    case ActionType.GO_TO_INDEX:

      return extend(state, {
        activeOffer: action.payload,
        page: PageType.INDEX,
      });

    case ActionType.CHANGE_FAVORITE_ACTIVE:

      const newActiveOffer = extend(state.activeOffer, {
        isFavorite: !state.activeOffer.isFavorite,
      });

      return extend(state, {
        activeOffer: newActiveOffer,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

