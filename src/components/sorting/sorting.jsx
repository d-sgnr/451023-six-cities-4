import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SortingList from "../sorting-list/sorting-list.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

class Sorting extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };

    this._toggleSortingMode = this._toggleSortingMode.bind(this);
  }

  render() {
    const {activeSortType, onSortingChange} = this.props;

    return <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={this._toggleSortingMode}
      >
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {this.state.isOpened ?
        <SortingList
          activeSortType={activeSortType}
          onSortingChange={onSortingChange}
        /> : ``
      }
    </form>;
  }

  _toggleSortingMode() {
    this.setState({
      isOpened: !this.state.isOpened,
    });
  }
}

Sorting.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  onSortingChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeSortType: state.activeSortType,
});

const mapDispatchToProps = (dispatch) => ({
  onSortingChange(sortType) {
    dispatch(ActionCreator.changeSorting(sortType));
  },
});

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
