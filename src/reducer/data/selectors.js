import NameSpace from "../name-space.js";
import {getUniqueObjectsArray} from "../../utils.js";
import {MAX_COMMENTS_COUNT} from "../../const.js";

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export const getComments = (state) => {
  const comments = state[NAME_SPACE].comments;
  const commentsToShow = comments.slice(Math.max(comments.length - MAX_COMMENTS_COUNT, 0)).reverse();
  return commentsToShow;
};

export const getNearOffers = (state) => {
  return state[NAME_SPACE].nearOffers;
};

export const getFavoriteOffers = (state) => {
  return state[NAME_SPACE].favoriteOffers;
};

export const getFavoriteCities = (state) => {
  const favoriteOffers = getFavoriteOffers(state);

  const allCities = favoriteOffers.map((offer) => {
    return offer.city;
  });

  return getUniqueObjectsArray(allCities, `name`);
};

export const getOfferById = (state, id) => {
  const offers = getOffers(state);
  const [offer] = offers.filter((item) => item.id === Number(id));
  return offer;
};
