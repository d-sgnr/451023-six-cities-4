import React from "react";
import renderer from "react-test-renderer";
import {Property} from "./property.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {StaticRouter as Router} from "react-router-dom";
import {mockStore, offers, activeOffer, userProfile, comments, coordinates} from "../../test-state.js";

it(`Property should be rendered correctly`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);

  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Property
            nearCoordinates={coordinates}
            offer={activeOffer}
            nearOffers={offers}
            userName={userProfile.name}
            reviews={comments}
            loadComments={() => {}}
            loadNearOffers={() => {}}
            onBookmarkClick={() => {}}
          />
        </Router>
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
