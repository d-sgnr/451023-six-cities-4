import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";

const review = {
  comment: `Am terminated it excellence invitation projection as. She graceful shy believed distance use nay. Lively is people so basket ladies window expect.`,
  date: `2019-05-08T14:13:56.569Z`,
  id: 52,
  rating: 4,
  user: {
    avatar: `avatar-max.jpg`,
    id: 2,
    isPro: true,
    name: `Max`
  }
};

it(`Review should be rendered correctly`, () => {
  const tree = renderer.create(
      <Review
        review={review}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
