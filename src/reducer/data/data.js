import {extend, replaceItemInArray} from "../../utils.js";
import {createOffer} from "../../adapters/offers.js";
import {createComment} from "../../adapters/comments.js";

const initialState = {
  offers: [],
  comments: [],
  nearOffers: [],
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
  CHANGE_FAVORITE: `CHANGE_FAVORITE`,
};

const ActionCreator = {
  loadOffers: (rawOffers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: rawOffers,
    };
  },
  loadComments: (rawComments) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: rawComments,
    };
  },
  loadNearOffers: (rawNearOffers) => {
    return {
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: rawNearOffers,
    };
  },
  changeFavorite: (offer) => ({
    type: ActionType.CHANGE_FAVORITE,
    payload: offer,
  }),
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  },
  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadComments(response.data));
      });
  },
  loadNearOffers: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        dispatch(ActionCreator.loadNearOffers(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      const adaptedOffers = action.payload.map((offer) => createOffer(offer));

      return extend(state, {
        offers: adaptedOffers,
      });

    case ActionType.LOAD_COMMENTS:
      const adaptedComments = action.payload.map((comment) => createComment(comment));

      return extend(state, {
        comments: adaptedComments,
      });

    case ActionType.LOAD_NEAR_OFFERS:
      const adaptedNearOffers = action.payload.map((offer) => createOffer(offer));

      return extend(state, {
        nearOffers: adaptedNearOffers,
      });

    case ActionType.CHANGE_FAVORITE:
      const newOffers = replaceItemInArray(state.offers, action.payload, `isFavorite`);
      const newNearOffers = replaceItemInArray(state.nearOffers, action.payload, `isFavorite`);
      return extend(state, {
        offers: newOffers,
        nearOffers: newNearOffers,
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
