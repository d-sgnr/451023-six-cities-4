import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

import {mockStore, coordinates, city} from "../../test-state.js";

it(`Map should be rendered correctly`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);

  const tree = renderer.create(
      <Provider store={store}>
        <Map
          coordinates={coordinates}
          city={city}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
