import React from "react";
import renderer from "react-test-renderer";
import NoPlaces from "./no-places.jsx";

it(`NoPlaces should be rendered correctly`, () => {
  const tree = renderer.create(
      <NoPlaces
        cityName={`Amsterdam`}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
