import {extend, replaceItemInArray} from "../../utils.js";
import {parseOffer, parseOfferToPost} from "../../adapters/offers.jsx";
import {parseComment, parseCommentToPost} from "../../adapters/comments.jsx";

const initialState = {
  offers: [],
  comments: [],
  nearOffers: [],
  favoriteOffers: [],
};

const ActionType = {
  SET_OFFERS: `SET_OFFERS`,
  SET_FAVORITE_OFFERS: `SET_FAVORITE_OFFERS`,
  SET_COMMENTS: `SET_COMMENTS`,
  SET_NEAR_OFFERS: `SET_NEAR_OFFERS`,
  CHANGE_FAVORITE: `CHANGE_FAVORITE`,
};

const ActionCreator = {
  setOffers: (rawOffers) => {
    return {
      type: ActionType.SET_OFFERS,
      payload: rawOffers,
    };
  },

  setComments: (rawComments) => {
    return {
      type: ActionType.SET_COMMENTS,
      payload: rawComments,
    };
  },

  setFavoriteOffers: (rawOffers) => {
    return {
      type: ActionType.SET_FAVORITE_OFFERS,
      payload: rawOffers,
    };
  },

  setNearOffers: (rawNearOffers) => {
    return {
      type: ActionType.SET_NEAR_OFFERS,
      payload: rawNearOffers,
    };
  },

  changeFavorite: (offer) => ({
    type: ActionType.CHANGE_FAVORITE,
    payload: offer,
  }),
};

const Operation = {
  loadOffers: (onSuccess) => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.setOffers(response.data));
        onSuccess();
      });
  },

  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.setComments(response.data));
      });
  },

  loadFavoriteOffers: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.setFavoriteOffers(response.data));
      });
  },

  changeFavorite: (offer) => (dispatch, getState, api) => {
    const status = offer.isFavorite ? 0 : 1;

    return api.post(`/favorite/${offer.id}/${status}`, parseOfferToPost(offer))
      .then(() => {
        dispatch(ActionCreator.changeFavorite(offer));
      });
  },

  postComment: (id, comment, onSuccess, onError) => (dispatch, getState, api) => {
    return api.post(`/comments/${id}`, parseCommentToPost(comment))
      .then((response) => {
        dispatch(ActionCreator.setComments(response.data));
        onSuccess();
      })
      .catch((error) => {
        onError(error);
      });
  },

  loadNearOffers: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        dispatch(ActionCreator.setNearOffers(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_OFFERS:
      const adaptedOffers = action.payload.map((offer) => parseOffer(offer));

      return extend(state, {
        offers: adaptedOffers,
      });

    case ActionType.SET_FAVORITE_OFFERS:
      const adaptedFavoriteOffers = action.payload.map((offer) => parseOffer(offer));

      return extend(state, {
        favoriteOffers: adaptedFavoriteOffers
      });

    case ActionType.SET_COMMENTS:
      const adaptedComments = action.payload.map((comment) => parseComment(comment));

      return extend(state, {
        comments: adaptedComments,
      });

    case ActionType.SET_NEAR_OFFERS:
      const adaptedNearOffers = action.payload.map((offer) => parseOffer(offer));

      return extend(state, {
        nearOffers: adaptedNearOffers,
      });

    case ActionType.CHANGE_FAVORITE:
      let newFavoriteOffers = state.favoriteOffers;

      if (action.payload.isFavorite === false) {
        const newOffer = extend(action.payload, {
          isFavorite: true,
        });

        newFavoriteOffers.push(newOffer);
      } else {
        const index = state.favoriteOffers.findIndex((offer) => offer.id === action.payload.id);

        if (index > -1) {
          newFavoriteOffers.splice(index, 1);
        }
      }

      const newOffers = replaceItemInArray(state.offers, action.payload, `isFavorite`);
      const newNearOffers = replaceItemInArray(state.nearOffers, action.payload, `isFavorite`);
      return extend(state, {
        offers: newOffers,
        nearOffers: newNearOffers,
        favoriteOffers: newFavoriteOffers,
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
