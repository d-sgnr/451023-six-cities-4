import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

const coordinates = [
  [52.369553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198]
];

const city = {
  name: `Paris`,
  coordinates: [48.856663, 2.351556],
};

it(`Map should be rendered correctly`, () => {
  const tree = renderer.create(
      <Map
        coordinates={coordinates}
        city={city}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
