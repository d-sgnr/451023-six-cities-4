import React from "react";
import renderer from "react-test-renderer";
import FavoritesList from "./favorites-list.jsx";
import {PropertyType} from "../../const.js";

import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {StaticRouter as Router} from "react-router-dom";

import {mockStoreAuth, offers, cities} from "../../test-state.js";

it(`FavoritesList should be rendered correctly`, () => {
  const testStore = configureStore();
  const store = testStore(mockStoreAuth);

  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <FavoritesList
            offers={offers}
            offersType={PropertyType.FAVORITE}
            cities={cities}
          />
        </Router>
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
