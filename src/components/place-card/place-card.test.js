import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";
import {PropertyType} from "../../const.js";

import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {BrowserRouter as Router} from "react-router-dom";

const mockStore = configureStore([]);

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

it(`PlaceCard should be rendered correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <PlaceCard
            onCardHover={() => {}}
            offer={offer}
            offersType={PropertyType.CITY}
            onCardTitleClick={() => {}}
          />
        </Router>
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
