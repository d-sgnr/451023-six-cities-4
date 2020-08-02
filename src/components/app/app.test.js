import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import App from "./app.jsx";
import {mockStore} from "../../test-state.js";
import thunk from "redux-thunk";

it(`App-component should render correctly`, () => {
  const testStore = configureStore([thunk]);
  const store = testStore(mockStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <App />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
