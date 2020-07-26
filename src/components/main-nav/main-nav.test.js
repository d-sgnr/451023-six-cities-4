import React from "react";
import renderer from "react-test-renderer";
import MainNav from "./main-nav.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
const mockStore = configureStore([]);

it(`MainNav should be rendered correctly when user is authorized`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
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
        <MainNav
          authorizationStatus={AuthorizationStatus.AUTH}
          userEmail={`email@email.ru`}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`MainNav should be rendered correctly when user is not authorized`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userProfile: {},
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <MainNav
          authorizationStatus={AuthorizationStatus.NO_AUTH}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
