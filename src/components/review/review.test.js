import React from "react";
import renderer from "react-test-renderer";
import {RATING} from "../../const.js";
import Review from "./review.jsx";

const review = {
  id: 12345,
  avatar: `avatar-max.jpg`,
  userName: `Max`,
  text: `Am terminated it excellence invitation projection as. She graceful shy believed distance use nay. Lively is people so basket ladies window expect.`,
  rating: RATING[4],
  date: `2019-04-24`,
};

it(`Review should be rendered correctly`, () => {
  const tree = renderer.create(
      <Review
        review={review}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
