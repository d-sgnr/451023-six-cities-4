import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const coordinates = [
  [52.369553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198]
];

const city = {
  name: `Paris`,
  coordinates: [48.856663, 2.351556],
};

const mockHoverOffer = {
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

const mockStore = configureStore([]);

it(`Map should be rendered correctly`, () => {
  const store = mockStore({
    hoveredOffer: mockHoverOffer,
    activeOffer: mockHoverOffer,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Map
          activeOffer={store.hoveredOffer}
          hoveredOffer={store.hoveredOffer}
          coordinates={coordinates}
          city={city}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
