import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";
import {comments} from "../../test-state.js";

it(`ReviewsList should be rendered correctly`, () => {
  const tree = renderer.create(
      <ReviewsList
        reviews={comments}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
