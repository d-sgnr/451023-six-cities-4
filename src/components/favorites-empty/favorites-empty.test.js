import React from "react";
import renderer from "react-test-renderer";
import FavoritesEmpty from "./favorites-empty.jsx";

it(`FavoritesEmpty should be rendered correctly`, () => {

  const tree = renderer.create(
      <FavoritesEmpty/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
