import React from "react";
import renderer from "react-test-renderer";
import Logo from "./logo.jsx";
import {Router} from "react-router-dom";
import history from "../../history.js";

it(`Logo should be rendered correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Logo/>
      </Router>).toJSON();

  expect(tree).toMatchSnapshot();
});
