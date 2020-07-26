import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import {AuthorizationStatus} from "../../reducer/user/user.js";

import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

it(`SignIn Page should be rendered correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userProfile: {
        avatar: `avatar`,
        email: `email@email.ru`,
        id: 4,
        isPro: true,
        name: `name`,
      },
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <SignIn
          authorizationStatus={AuthorizationStatus.NO_AUTH}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
