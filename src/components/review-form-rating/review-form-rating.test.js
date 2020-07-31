import React from "react";
import renderer from "react-test-renderer";
import ReviewFormRating from "./review-form-rating.jsx";

it(`ReviewFormRating should be rendered correctly`, () => {
  const tree = renderer.create(
      <ReviewFormRating
        ratingNumber={1}
        onRatingChange={() => {}}
        isChecked={false}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`ReviewFormRating should be rendered correctly when checked`, () => {
  const tree = renderer.create(
      <ReviewFormRating
        ratingNumber={2}
        onRatingChange={() => {}}
        isChecked={true}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
