import React, {PureComponent} from "react";
import Review from "../review/review.jsx";
import PropTypes from "prop-types";

class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      reviews
    } = this.props;

    return <ul className="reviews__list">
      {reviews.map((review, i) => {
        return <Review
          key={`${i}-${review.date}`}
          review={review}
        />;
      })}
    </ul>;
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;


