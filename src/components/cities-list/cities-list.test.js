import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list.jsx";

import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import {mockStore, offers, city} from "../../test-state.js";

it(`CitiesList should be rendered correctly when not active`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);

  const tree = renderer.create(
      <Provider store={store}>
        <CitiesList
          offers={offers}
          city={city}
          onCityClick={() => {}}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
