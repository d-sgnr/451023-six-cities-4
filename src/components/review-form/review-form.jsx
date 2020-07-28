import React from "react";
import PropTypes from "prop-types";

import ReviewFormRating from "../review-form-rating/review-form-rating.jsx";

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;
const MAX_RATING = 5;

const ReviewForm = (props) => {
  const {onFormSumbit, onRatingChange, onReviewTextChange, reviewText, selectedRating, isFormDisabled, isPostError} = props;

  return (<form className="reviews__form form"
    onSubmit={onFormSumbit}
    action="#"
    method="post"
  >
    <label className="reviews__label form__label" htmlFor="review">Your review</label>
    <div className="reviews__rating-form form__rating">
      {[...Array(MAX_RATING)].map((x, i) =>
        <ReviewFormRating
          key={i}
          ratingNumber={MAX_RATING - i}
          onRatingChange={onRatingChange}
          isChecked={MAX_RATING - i === parseInt(selectedRating, 10)}
        />
      )}
    </div>
    <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
      minLength={MIN_REVIEW_LENGTH}
      maxLength={MAX_REVIEW_LENGTH}
      onChange={onReviewTextChange}
      value={reviewText}
    >
    </textarea>
    <div className="reviews__button-wrapper">
      <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_REVIEW_LENGTH} characters</b>.
      </p>
      <button
        className="reviews__submit form__submit button"
        type="submit"
        disabled={isFormDisabled}
      >Submit</button>
    </div>
    {isPostError ?
      <div className="" style={{position: `absolute`, color: `red`, textAlign: `center`, fontSize: `12px`, bottom: `35px`}}>
        При отправке отзыва произошла ошибка. Попробуйте еще раз.
      </div>
      : ``}
  </form>);
};

ReviewForm.propTypes = {
  onFormSumbit: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onReviewTextChange: PropTypes.func.isRequired,
  reviewText: PropTypes.string.isRequired,
  isFormDisabled: PropTypes.bool.isRequired,
  isPostError: PropTypes.bool.isRequired,
  selectedRating: PropTypes.string.isRequired,
};

export {ReviewForm};
export default ReviewForm;

