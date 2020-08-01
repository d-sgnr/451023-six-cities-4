import React from "react";
import renderer from "react-test-renderer";
import Sorting from "./sorting.jsx";

import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {mockStore} from "../../test-state.js";

it(`Sorting should be rendered correctly`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);

  const tree = renderer.create(
      <Provider store={store}>
        <Sorting
          onSortingChange={() => {}}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
