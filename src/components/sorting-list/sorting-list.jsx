import React from "react";
import PropTypes from "prop-types";

import {SortType} from "../../const.js";
import SortingItem from "../sorting-item/sorting-item.jsx";
const sortTypes = Object.values(SortType);

import {ActionCreator} from "../../reducer/app/app.js";
import {connect} from "react-redux";

const getSelectValue = (sortType) => {
  switch (sortType) {
    case SortType.POPULAR :
      return SortType.POPULAR.toLowerCase();
    case SortType.TO_HIGH :
      return `to-high`;
    case SortType.TO_LOW :
      return `to-low`;
    case SortType.TOP_RATED :
      return `top-rated`;
  } return ``;
};

const SortingList = (props) => {
  const {activeSortType, onSortingChange} = props;

  return <React.Fragment>
    <ul className="places__options places__options--custom places__options--opened">
      {sortTypes.map((sortType, i) => {
        return <SortingItem
          activeSortType={activeSortType}
          title={sortType}
          key={i}
          onSortingChange={() => {
            onSortingChange(sortType);
          }}
        />;
      })}
    </ul>
    <select value={getSelectValue(activeSortType)} onChange={() => {}} className="places__sorting-type visually-hidden" id="places-sorting">
      {sortTypes.map((sortType, i) => {
        return <option
          className="places__option"
          value={getSelectValue(sortType)}
          key={i}
        >{sortType}</option>;
      })}
    </select>
  </React.Fragment>;
};

SortingList.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  onSortingChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSortingChange(sortType) {
    dispatch(ActionCreator.changeSorting(sortType));
  },
});

export {SortingList};
export default connect(null, mapDispatchToProps)(SortingList);
