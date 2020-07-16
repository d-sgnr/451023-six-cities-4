import React from "react";
import renderer from "react-test-renderer";
import MainNav from "./main-nav.jsx";

const userName = `Max`;

it(`MainNav should be rendered correctly`, () => {
  const tree = renderer.create(
      <MainNav
        userName={userName}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
