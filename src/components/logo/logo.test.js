import React from "react";
import renderer from "react-test-renderer";
import Logo from "./logo.jsx";
import {BrowserRouter as Router} from "react-router-dom";

it(`Logo should be rendered correctly`, () => {
  const tree = renderer.create(
      <Router>
        <Logo/>
      </Router>).toJSON();

  expect(tree).toMatchSnapshot();
});
