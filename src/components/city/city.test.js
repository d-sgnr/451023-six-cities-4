import React from "react";
import renderer from "react-test-renderer";
import City from "./city.jsx";

import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {mockStore, city} from "../../test-state.js";

it(`City should be rendered correctly when not active`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);

  const tree = renderer.create(
      <Provider store={store}>
        <City
          city={city}
          isActive={false}
          onCityClick={() => {}}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`City should be rendered correctly when active`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);

  const tree = renderer.create(
      <Provider store={store}>
        <City
          city={city}
          isActive={true}
          onCityClick={() => {}}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
