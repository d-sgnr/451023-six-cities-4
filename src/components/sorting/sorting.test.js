import React from "react";
import renderer from "react-test-renderer";
import Sorting from "./sorting.jsx";

import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

import NameSpace from "../../reducer/name-space.js";

it(`Sorting should be rendered correctly`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      activeSortType: `Popular`,
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Sorting
          onSortingChange={() => {}}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
