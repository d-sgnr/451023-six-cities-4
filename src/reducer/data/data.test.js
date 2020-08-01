import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionCreator, ActionType, Operation} from "./data.js";
import {offers, rawOffers, rawComments, comments, activeOffer as offer} from "../../test-state.js";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    offers: [],
    nearOffers: [],
    comments: [],
    favoriteOffers: [],
  });
});

it(`Reducer should update offers by load offers`, () => {
  expect(reducer({
    offers: [],
    nearOffers: [],
    comments: [],
    favoriteOffers: [],
  }, {
    type: ActionType.SET_OFFERS,
    payload: rawOffers,
  })).toEqual({
    offers,
    nearOffers: [],
    comments: [],
    favoriteOffers: [],
  });
});

it(`Reducer should update comments by load comments`, () => {
  expect(reducer({
    offers: [],
    nearOffers: [],
    comments: [],
    favoriteOffers: [],
  }, {
    type: ActionType.SET_COMMENTS,
    payload: rawComments,
  })).toEqual({
    offers: [],
    nearOffers: [],
    comments,
    favoriteOffers: [],
  });
});

it(`Reducer should update favorite offers by load favorites`, () => {
  expect(reducer({
    offers: [],
    nearOffers: [],
    comments: [],
    favoriteOffers: [],
  }, {
    type: ActionType.SET_FAVORITE_OFFERS,
    payload: rawOffers,
  })).toEqual({
    offers: [],
    nearOffers: [],
    comments: [],
    favoriteOffers: offers,
  });
});

it(`Reducer should change offer status in offers array and add offer to favorite offers`, () => {
  expect(reducer({
    offers: [{id: 1, isFavorite: false}, {id: 2, isFavorite: false}],
    nearOffers: [{id: 1, isFavorite: false}, {id: 2, isFavorite: false}],
    favoriteOffers: [],
  }, {
    type: ActionType.CHANGE_FAVORITE,
    payload: {id: 2, isFavorite: false}
  })).toEqual({
    offers: [{id: 1, isFavorite: false}, {id: 2, isFavorite: true}],
    nearOffers: [{id: 1, isFavorite: false}, {id: 2, isFavorite: true}],
    favoriteOffers: [{id: 2, isFavorite: true}],
  });
});

it(`Action creator for changing offer's favorite status returns correct action`, () => {
  expect(ActionCreator.changeFavorite(offer)).toEqual({
    type: ActionType.CHANGE_FAVORITE,
    payload: offer,
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const onSuccess = jest.fn();
    const offersLoader = Operation.loadOffers(onSuccess);

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_OFFERS,
          payload: [{fake: true}],
        });
      });
  });
});


