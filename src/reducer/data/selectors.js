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

export const getFirstCity = createSelector(
    getOffers,
    (offers) => {
      return offers[0].city;
    }
);
