import React from "react";
import renderer from "react-test-renderer";
import {MainNav} from "./main-nav.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {AuthorizationStatus} from "../../const.js";
import {StaticRouter as Router} from "react-router-dom";

import {mockStoreAuth, mockStore, userProfile} from "../../test-state.js";

it(`MainNav should be rendered correctly when user is authorized`, () => {
  const testStore = configureStore();
  const store = testStore(mockStoreAuth);

  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <MainNav
            authorizationStatus={AuthorizationStatus.AUTH}
            userEmail={userProfile.email}
          />
        </Router>
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`MainNav should be rendered correctly when user is not authorized`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);

  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <MainNav
            authorizationStatus={AuthorizationStatus.NO_AUTH}
          />
        </Router>
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
