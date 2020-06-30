import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";
import {RATING} from "../../const.js";

const reviews = [
  {
    id: Math.random(),
    avatar: `avatar-max.jpg`,
    userName: `Max`,
    text: `Am terminated it excellence invitation projection as. She graceful shy believed distance use nay. Lively is people so basket ladies window expect.`,
    rating: RATING[4],
    date: `2019-04-24`,
  },
  {
    id: Math.random(),
    avatar: `avatar-angelina.jpg`,
    userName: `Angelina`,
    text: `Though wished merits or be. Alone visit use these smart rooms ham. No waiting in on enjoyed placing it inquiry.`,
    rating: RATING[2],
    date: `2019-04-24`,
  },
];

it(`ReviewsList should be rendered correctly`, () => {
  const tree = renderer.create(
      <ReviewsList
        reviews={reviews}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
