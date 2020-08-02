import React from "react";
import renderer from "react-test-renderer";
import FavoritesListItem from "./favorites-list-item.jsx";
import {PropertyType} from "../../const.js";
import {Provider} from "react-redux";
import {StaticRouter as Router} from "react-router-dom";
import configureStore from "redux-mock-store";

import {mockStoreAuth, offers, city} from "../../test-state.js";

it(`FavoritesListItem should be rendered correctly`, () => {
  const testStore = configureStore();
  const store = testStore(mockStoreAuth);

  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <FavoritesListItem
            offers={offers}
            offersType={PropertyType.FAVORITE}
            city={city}
            offer={offers[0]}
          />
        </Router>
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
