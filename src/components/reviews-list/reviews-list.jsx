import React from "react";
import Review from "../review/review.jsx";
import PropTypes from "prop-types";

const ReviewsList = (props) => {
  const {
    reviews
  } = props;

  return <ul className="reviews__list">
    {reviews.map((review, i) => {
      return <Review
        key={`${i}-${review.date}`}
        review={review}
      />;
    })}
  </ul>;
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;


