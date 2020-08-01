import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";
import {PropertyType} from "../../const.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {StaticRouter as Router} from "react-router-dom";
import {mockStore, activeOffer} from "../../test-state.js";

it(`PlaceCard should be rendered correctly`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);

  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <PlaceCard
            onCardHover={() => {}}
            offer={activeOffer}
            offersType={PropertyType.CITY}
            onCardTitleClick={() => {}}
          />
        </Router>
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
