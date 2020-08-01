import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const getUserEmail = (state) => {
  if (state[NAME_SPACE].userProfile) {
    return state[NAME_SPACE].userProfile.email;
  } return ``;
};
