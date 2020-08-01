import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import App from "./app.jsx";
import NameSpace from "../../reducer/name-space.js";
import thunk from 'redux-thunk';
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {BrowserRouter as Router} from "react-router-dom";

const mockStore = configureStore([thunk]);
const offers = [
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
    id: Math.random(),
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
      id: 1,
      isPro: true,
      name: `Angelina`
    },
    id: Math.random(),
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
      id: 1,
      isPro: true,
      name: `Angelina`
    },
    id: Math.random(),
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

const city = {
  name: `Amsterdam`,
  location: {
    latitude: 52.373057,
    longitude: 4.892557,
    zoom: 10,
  },
};

export const PageType = {
  INDEX: `INDEX`,
  PROPERTY: `PROPERTY`,
};

const offer = offers[0];

const mockCoordinates = [[52.3909553943508, 4.85309666406198], [52.3909553943508, 4.85309666406198]];

const userName = `Max`;

describe(`Render App`, () => {
  it(`Render MainScreen`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        offers,
        comments: [],
        nearOffers: offers,
      },
      [NameSpace.APP]: {
        city,
        page: PageType.INDEX,
        activeSortType: `Popular`,
        hoveredOffer: null,
        userName: `oliver.conner@gmail.com`,
        activeOffer: null,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userProfile: {
          avatar: `avatar`,
          email: `email@email.ru`,
          id: 4,
          isPro: true,
          name: `name`,
        },
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router>
              <App
                city={city}
                page={PageType.INDEX}
                userName={userName}
              />
            </Router>
          </Provider>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render PropertyScreen`, () => {

    const store = mockStore({
      [NameSpace.DATA]: {
        offers,
        comments: [],
        nearOffers: offers,
      },
      [NameSpace.APP]: {
        city,
        page: PageType.INDEX,
        activeSortType: `Popular`,
        hoveredOffer: null,
        userName: `oliver.conner@gmail.com`,
        activeOffer: offer,
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userProfile: {
          avatar: `avatar`,
          email: `email@email.ru`,
          id: 4,
          isPro: true,
          name: `name`,
        },
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router>
              <App
                page={PageType.PROPERTY}
                city={city}
                userName={userName}
                mockCoordinates={mockCoordinates}
                nearCoordinates={mockCoordinates}
                offer={offer}
                nearOffers={offers}
                reviews={reviews}
                loadComments={() => {}}
                loadNearOffers={() => {}}
                onBookmarkClick={() => {}}
              />
            </Router>
          </Provider>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
