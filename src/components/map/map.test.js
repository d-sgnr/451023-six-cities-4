import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";

const coordinates = [
  [52.369553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198]
];

const city = {
  name: `Amsterdam`,
  location: {
    latitude: 52.373057,
    longitude: 4.892557,
    zoom: 10,
  },
};

const offer = {
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
};

const mockStore = configureStore([]);

it(`Map should be rendered correctly`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      hoveredOffer: offer,
      activeOffer: offer,
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Map
          coordinates={coordinates}
          city={city}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
