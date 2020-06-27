import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

const mock = [
  [52.369553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198]
];

it(`Map should be rendered correctly`, () => {
  const tree = renderer.create(
      <Map
        coordinates={mock}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
