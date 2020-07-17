import React from "react";
import renderer from "react-test-renderer";
import NoPlaces from "./no-places.jsx";

const city = `Amsterdam`;

it(`NoPlaces should be rendered correctly`, () => {
  const tree = renderer.create(
      <NoPlaces
        city={city}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
