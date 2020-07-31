import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export const getComments = (state) => {
  return state[NAME_SPACE].comments;
};

export const getNearOffers = (state) => {
  return state[NAME_SPACE].nearOffers;
};

export const getFavoriteOffers = (state) => {
  return state[NAME_SPACE].favoriteOffers;
};

export const getOfferById = (state, id) => {
  const offers = getOffers(state);
  const [offer] = offers.filter((item) => item.id === Number(id));
  return offer;
};

export const getFirstCity = createSelector(
    getOffers,
    (offers) => {
      return offers[0].city;
    }
);
