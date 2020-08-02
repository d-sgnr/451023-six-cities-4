import React from "react";
import renderer from "react-test-renderer";
import SignInForm from "./sign-in-form.jsx";

import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {mockStore} from "../../test-state.js";

it(`SignInForm should be rendered correctly`, () => {
  const testStore = configureStore();
  const store = testStore(mockStore);

  const tree = renderer.create(
      <Provider store={store}>
        <SignInForm
          onSubmit={() => {}}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
