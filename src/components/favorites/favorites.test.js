import React from "react";
import renderer from "react-test-renderer";
import {Favorites} from "./favorites.jsx";

import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {StaticRouter as Router} from "react-router-dom";
import {mockStoreAuth, offers, userProfile, cities} from "../../test-state.js";

it(`Favorites should be rendered correctly when no favorites`, () => {
  const testStore = configureStore();
  const store = testStore(mockStoreAuth);

  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Favorites
            offers={offers}
            favoriteOffers={[]}
            userName={userProfile.email}
            loadFavoriteOffers={() => {}}
            favoriteCities={([])}
          />
        </Router>
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Favorites should be rendered correctly when favorites added`, () => {
  const testStore = configureStore();
  const store = testStore(mockStoreAuth);

  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Favorites
            offers={offers}
            favoriteOffers={offers}
            userName={userProfile.email}
            loadFavoriteOffers={() => {}}
            favoriteCities={cities}
          />
        </Router>
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
