import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";

const reviews = [
  {
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
  },
  {
    comment: `Am terminated it excellence invitation projection as. She graceful shy believed distance use nay. Lively is people so basket ladies window expect.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 48,
    rating: 3,
    user: {
      avatar: `avatar-anna.jpg`,
      id: 4,
      isPro: false,
      name: `Anna`
    }
  },
];

it(`ReviewsList should be rendered correctly`, () => {
  const tree = renderer.create(
      <ReviewsList
        reviews={reviews}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
