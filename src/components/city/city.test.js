import React from "react";
import renderer from "react-test-renderer";
import City from "./city.jsx";

import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const city = {
  name: `Amsterdam`,
  coordinates: [52.373057, 4.892557],
};

it(`City should be rendered correctly when not active`, () => {
  const store = mockStore({
    city,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <City
          city={city}
          isActive={false}
          onCityClick={() => {}}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`City should be rendered correctly when active`, () => {
  const store = mockStore({
    city,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <City
          city={city}
          isActive={true}
          onCityClick={() => {}}
        />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
