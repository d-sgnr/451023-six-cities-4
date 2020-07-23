import React from "react";
import renderer from "react-test-renderer";
import NoPlaces from "./no-places.jsx";

const cityName = `Amsterdam`;

it(`NoPlaces should be rendered correctly`, () => {
  const tree = renderer.create(
      <NoPlaces
        cityName={cityName}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
