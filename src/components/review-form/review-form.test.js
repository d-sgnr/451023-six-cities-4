import React from "react";
import renderer from "react-test-renderer";
import ReviewForm from "./review-form.jsx";

it(`ReviewForm should be rendered correctly`, () => {
  const tree = renderer.create(
      <ReviewForm
        onFormSumbit={() => {}}
        onRatingChange={() => {}}
        onReviewTextChange={() => {}}
        reviewText={``}
        isFormDisabled={false}
        selectedRating={``}
        isPostError={false}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`ReviewForm should be rendered correctly when disabled`, () => {
  const tree = renderer.create(
      <ReviewForm
        onFormSumbit={() => {}}
        onRatingChange={() => {}}
        onReviewTextChange={() => {}}
        reviewText={``}
        isFormDisabled={true}
        selectedRating={``}
        isPostError={false}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`ReviewForm should be rendered correctly when error`, () => {
  const tree = renderer.create(
      <ReviewForm
        onFormSumbit={() => {}}
        onRatingChange={() => {}}
        onReviewTextChange={() => {}}
        reviewText={``}
        isFormDisabled={true}
        selectedRating={``}
        isPostError={true}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
