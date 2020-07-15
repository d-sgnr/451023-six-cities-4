import React from "react";
import renderer from "react-test-renderer";
import Sorting from "./sorting.jsx";

import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

it(`Sorting should be rendered correctly`, () => {
  const store = mockStore({
    activeSortType: `Popular`,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Sorting
          activeSortType={store.activeSortType}
          onSortingChange={() => {}}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
