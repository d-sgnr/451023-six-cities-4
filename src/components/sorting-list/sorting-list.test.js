import React from "react";
import renderer from "react-test-renderer";
import SortingList from "./sorting-list.jsx";

import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

it(`SortingList should be rendered correctly`, () => {
  const store = mockStore({
    activeSortType: `Popular`,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <SortingList
          activeSortType={`POPULAR`}
          onSortingChange={() => {}}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
