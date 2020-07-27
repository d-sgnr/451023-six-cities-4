import React, {PureComponent} from "react";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const MIN_REVIEW_LENGTH = 50;

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        selectedRating: ``,
        reviewText: ``,
        isFormDisabled: true,
        isPostError: false,
      };

      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleTextChange = this._handleTextChange.bind(this);
      this._onSuccessHandler = this._onSuccessHandler.bind(this);
      this._onErrorHandler = this._onErrorHandler.bind(this);
    }

    _handleSubmit(evt) {
      const {onSubmit, offerId} = this.props;

      evt.preventDefault();

      onSubmit(
          offerId, {
            comment: this.state.reviewText,
            rating: this.state.selectedRating,
          },
          this._onSuccessHandler,
          this._onErrorHandler
      );
    }

    _handleRatingChange(evt) {
      this.setState({
        selectedRating: evt.target.value,
      });
    }

    _handleTextChange(evt) {
      this.setState({
        reviewText: evt.target.value,
      });
    }

    _onSuccessHandler() {
      this.setState({
        isFormDisabled: false,
        selectedRating: ``,
        reviewText: ``,
        isPostError: false,
      });
    }

    _onErrorHandler() {
      this.setState({
        isPostError: true,
      });
    }

    componentDidUpdate() {
      this.setState({
        isFormDisabled: true,
      });

      if (this.state.reviewText.length > MIN_REVIEW_LENGTH && this.state.selectedRating.length > 0) {
        this.setState({
          isFormDisabled: false,
        });
      }
    }

    render() {
      return (
        <Component
          onFormSumbit={this._handleSubmit}
          onRatingChange={this._handleRatingChange}
          onReviewTextChange={this._handleTextChange}
          reviewText={this.state.reviewText}
          isFormDisabled={this.state.isFormDisabled}
          selectedRating={this.state.selectedRating}
          isPostError={this.state.isPostError}
        />
      );
    }
  }

  WithReviewForm.propTypes = {
    offerId: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    onSubmit(id, review, onSuccess, onError) {
      dispatch(DataOperation.postComment(id, review, onSuccess, onError));
    },
  });

  return connect(null, mapDispatchToProps)(WithReviewForm);
};

export {withReviewForm};
export default withReviewForm;
