import React from "react";
import renderer from "react-test-renderer";
import withReviewForm from "./with-review-form.jsx";

const MockComponent = () => <div/>;

const MockComponentWrapped = withReviewForm(MockComponent);

import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

it(`withReviewForm is rendered correctly`, () => {
  const store = mockStore({});

  const tree = renderer.create((
    <Provider store={store}>
      <MockComponentWrapped
        offerId={2}
        onSubmit={() => {}}
        onFormSumbit={() => {}}
        onRatingChange={() => {}}
        onReviewTextChange={() => {}}
        reviewText={``}
        isFormDisabled={false}
        selectedRating={`2`}
        isPostError={true}
      />
    </Provider>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
