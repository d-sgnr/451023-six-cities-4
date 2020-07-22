import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.APP;

export const getCity = (state) => {
  return state[NAME_SPACE].city;
};

export const getPage = (state) => {
  return state[NAME_SPACE].page;
};

export const getActiveSortType = (state) => {
  return state[NAME_SPACE].activeSortType;
};

export const getHoveredOffer = (state) => {
  return state[NAME_SPACE].hoveredOffer;
};

export const getUserName = (state) => {
  return state[NAME_SPACE].userName;
};

export const getActiveOffer = (state) => {
  return state[NAME_SPACE].activeOffer;
};
