import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import {AuthorizationStatus} from "../../const.js";

import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {StaticRouter as Router} from "react-router-dom";
import {mockStore} from "../../test-state.js";

it(`SignIn Page should be rendered correctly`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);

  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <SignIn
            authorizationStatus={AuthorizationStatus.NO_AUTH}
          />
        </Router>
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
