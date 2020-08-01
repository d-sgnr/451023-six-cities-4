import {AuthorizationStatus} from "./const.js";
import NameSpace from "./reducer/name-space.js";

export const offers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.373057,
        longitude: 4.892557,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/1.png`,
      id: 1,
      isPro: true,
      name: `Angelina`
    },
    id: 1,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-small-03.jpg`,
      `img/apartment-small-04.jpg`
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.373057,
        longitude: 4.892557,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/1.png`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 2,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-small-03.jpg`,
      `img/apartment-small-04.jpg`
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
];

export const rawOffers = [
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.373057,
        "longitude": 4.892557,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/1.png`,
      "id": 1,
      "is_pro": true,
      "name": `Angelina`
    },
    "id": 1,
    "images": [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-small-03.jpg`,
      `img/apartment-small-04.jpg`
    ],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.3909553943508,
      "longitude": 4.85309666406198,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/apartment-01.jpg`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  },
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.373057,
        "longitude": 4.892557,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/1.png`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "id": 2,
    "images": [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-small-03.jpg`,
      `img/apartment-small-04.jpg`
    ],
    "is_favorite": false,
    "is_premium": false,
    "location": {
      "latitude": 52.3909553943508,
      "longitude": 4.85309666406198,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/apartment-01.jpg`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`
  },
];

export const rawComments = [
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
    "id": 48,
    "rating": 3,
    "user": {
      "avatar_url": `avatar-anna.jpg`,
      "id": 4,
      "is_pro": false,
      "name": `Anna`
    }
  },
];

export const updatedOffers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.373057,
        longitude: 4.892557,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/1.png`,
      id: 1,
      isPro: true,
      name: `Angelina`
    },
    id: 1,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-small-03.jpg`,
      `img/apartment-small-04.jpg`
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.373057,
        longitude: 4.892557,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/1.png`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 2,
    images: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-small-03.jpg`,
      `img/apartment-small-04.jpg`
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
];

export const comments = [
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
    id: 48,
    rating: 3,
    user: {
      avatar: `avatar-anna.jpg`,
      id: 4,
      isPro: false,
      name: `Anna`
    }
  },
];

export const comment = {
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
};

export const city = {
  name: `Amsterdam`,
  location: {
    latitude: 52.373057,
    longitude: 4.892557,
    zoom: 10,
  },
};

export const cities = [{
  name: `Amsterdam`,
  location: {
    latitude: 52.373057,
    longitude: 4.892557,
    zoom: 10,
  },
},
{
  name: `Amsterdam`,
  location: {
    latitude: 52.373057,
    longitude: 4.892557,
    zoom: 10,
  },
}];

export const userProfile = {
  avatar: `avatar.img`,
  email: `max@mail.ru`,
  id: 123,
  isPro: true,
  name: `Max`,
};

export const coordinates = [[52.3909553943508, 4.85309666406198], [52.3909553943508, 4.85309666406198]];

export const activeOffer = offers[0];
export const activeSortType = `Popular`;

export const mockStore = {
  [NameSpace.DATA]: {
    offers,
    comments,
    nearOffers: offers,
    favoriteOffers: [],
  },
  [NameSpace.APP]: {
    city,
    activeSortType,
    hoveredOffer: activeOffer,
    userName: null,
    activeOffer,
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userProfile: {},
  },
};

export const mockStoreAuth = {
  [NameSpace.DATA]: {
    offers,
    comments,
    nearOffers: offers,
    favoriteOffers: offers,
  },
  [NameSpace.APP]: {
    city,
    activeSortType,
    hoveredOffer: activeOffer,
    userName: userProfile.email,
    activeOffer,
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.AUTH,
    userProfile,
  },
};
