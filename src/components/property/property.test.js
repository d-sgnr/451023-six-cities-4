import React from "react";
import renderer from "react-test-renderer";
import Property from "./property.jsx";

import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import offers from "../../mocks/offers.js";

const mockStore = configureStore([]);

const offer = {
  id: 12345,
  coordinates: [52.3909553943508, 4.85309666406198],
  city: {
    name: `Amsterdam`,
    coordinates: [52.3909553943508, 4.85309666406198],
  },
  pictures: [
    `room.jpg`,
    `apartment-01.jpg`,
    `apartment-02.jpg`,
    `apartment-03.jpg`,
    `apartment-small-03.jpg`,
    `apartment-small-04.jpg`
  ],
  price: 140,
  rating: 80,
  title: `Wood and stone place`,
  type: `House`,
  isBookmarked: true,
  isPremium: false,
  description: [
    `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
  ],
  bedroomsCount: 3,
  guestsCount: 4,
  appliances: [
    `Wifi`,
    `Heating`,
    `Kitchen`,
    `Cable TV`
  ],
  host: {
    picture: `avatar-angelina.jpg`,
    name: `Adam Smith`,
    isSuper: true,
  }
};

const city = {
  name: `Amsterdam`,
  coordinates: [52.373057, 4.892557],
};


const mockCoordinates = [[52.3909553943508, 4.85309666406198], [52.3909553943508, 4.85309666406198]];

it(`Property should be rendered correctly`, () => {
  const store = mockStore({
    offers,
    activeOffer: offer,
    nearCoordinates: mockCoordinates,
    nearOffers: offers,
    city,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Property
          offer={store.activeOffer}
          nearCoordinates={store.nearCoordinates}
          nearOffers={store.nearOffers}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
