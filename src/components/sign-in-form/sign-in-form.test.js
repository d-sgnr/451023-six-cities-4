import React from "react";
import renderer from "react-test-renderer";
import SignInForm from "./sign-in-form.jsx";

import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {Provider} from "react-redux";
import {AuthorizationStatus} from "../../reducer/user/user.js";
const mockStore = configureStore([]);

it(`SignInForm should be rendered correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userProfile: {},
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <SignInForm
          onSubmit={() => {}}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
