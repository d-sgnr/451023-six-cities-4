import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionCreator, ActionType, Operation} from "./data.js";

const api = createAPI(() => {});

const offers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitche`],
    host: {
      avatarUrl: `img/1.png`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 1,
    images: [`img/1.png`, `img/2.png`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/1.png`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitche`],
    host: {
      avatarUrl: `img/1.png`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 1,
    images: [`img/1.png`, `img/2.png`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/1.png`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
];

const rawOffers = [
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitche`],
    "host": {
      "avatar_url": `img/1.png`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "id": 1,
    "images": [`img/1.png`, `img/2.png`],
    "is_favorite": true,
    "is_premium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/1.png`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  },
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitche`],
    "host": {
      "avatar_url": `img/1.png`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "id": 1,
    "images": [`img/1.png`, `img/2.png`],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/1.png`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  },
];

const reviews = [
  {
    comment: `Am terminated it excellence invitation projection as. She graceful shy believed distance use nay. Lively is people so basket ladies window expect.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 52,
    rating: 4,
    user: {
      avatar: `avatar-max.jpg`,
      id: 2,
      isPro: true,
      name: `Max`
    }
  },
  {
    comment: `Am terminated it excellence invitation projection as. She graceful shy believed distance use nay. Lively is people so basket ladies window expect.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 52,
    rating: 4,
    user: {
      avatar: `avatar-max.jpg`,
      id: 2,
      isPro: true,
      name: `Max`
    }
  },
];

const rawReviews = [
  {
    "comment": `Am terminated it excellence invitation projection as. She graceful shy believed distance use nay. Lively is people so basket ladies window expect.`,
    "date": `2019-05-08T14:13:56.569Z`,
    "id": 52,
    "rating": 4,
    "user": {
      "avatar_url": `avatar-max.jpg`,
      "id": 2,
      "is_pro": true,
      "name": `Max`
    }
  },
  {
    "comment": `Am terminated it excellence invitation projection as. She graceful shy believed distance use nay. Lively is people so basket ladies window expect.`,
    "date": `2019-05-08T14:13:56.569Z`,
    "id": 52,
    "rating": 4,
    "user": {
      "avatar_url": `avatar-max.jpg`,
      "id": 2,
      "is_pro": true,
      "name": `Max`
    }
  },
];

const offer = offers[0];

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
    payload: rawReviews,
  })).toEqual({
    offers: [],
    nearOffers: [],
    comments: reviews,
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


