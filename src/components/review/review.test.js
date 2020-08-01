import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";
import {comment} from "../../test-state.js";

it(`Review should be rendered correctly`, () => {
  const tree = renderer.create(
      <Review
        review={comment}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
