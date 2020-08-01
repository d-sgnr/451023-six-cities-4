import React from "react";
import renderer from "react-test-renderer";
import {Favorites} from "./favorites.jsx";

import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter as Router} from "react-router-dom";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";

const mockStore = configureStore([]);

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

const city = {
  name: `Amsterdam`,
  location: {
    latitude: 52.373057,
    longitude: 4.892557,
    zoom: 10,
  },
};

const cities = [
  {
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
  }
];

const userProfile = {
  avatar: `avatar.img`,
  email: `max@mail.ru`,
  id: 123,
  isPro: true,
  name: `Max`,
};

it(`Favorites should be rendered correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      offers,
      favoriteOffers: offers,
      nearOffers: offers,
    },
    [NameSpace.APP]: {
      city,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      userProfile,
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Favorites
            offers={offers}
            favoriteOffers={offers}
            userName={`max@mail.ru`}
            loadFavoriteOffers={() => {}}
            favoriteCities={cities}
          />
        </Router>
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
