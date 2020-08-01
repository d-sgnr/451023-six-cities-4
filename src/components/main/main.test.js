import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {StaticRouter as Router} from "react-router-dom";

import {mockStore, offers, userProfile, city, coordinates} from "../../test-state.js";

describe(`MainComponent`, () => {
  it(`MainComponent should be rendered correctly`, () => {
    const testStore = configureStore();
    const store = testStore(mockStore);

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router>
              <Main
                city={city}
                offers={offers}
                onCityClick={() => {}}
                placesCoordinates={coordinates}
                userName={userProfile.email}
                favoriteOffers={offers}
              />
            </Router>
          </Provider>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
