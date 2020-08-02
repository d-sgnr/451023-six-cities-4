import React from "react";
import renderer from "react-test-renderer";
import {PropertyType} from "../../const.js";
import OffersList from "./offers-list.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {StaticRouter as Router} from "react-router-dom";
import {mockStore, offers} from "../../test-state.js";

it(`OffersList should be rendered correctly`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);

  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <OffersList
            offers={offers}
            offersType={PropertyType.CITY}
          />
        </Router>
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
