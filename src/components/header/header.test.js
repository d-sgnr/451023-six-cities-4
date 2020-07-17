import React from "react";
import renderer from "react-test-renderer";
import Header from "./header.jsx";

const children = <div className="children-component" />;

it(`Header should be rendered correctly`, () => {
  const tree = renderer.create(
      <Header>
        {children}
      </Header>).toJSON();

  expect(tree).toMatchSnapshot();
});
