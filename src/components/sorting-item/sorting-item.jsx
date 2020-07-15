import React from "react";
import PropTypes from "prop-types";

const SortingItem = (props) => {
  const {title, activeSortType, onSortingChange} = props;

  const isActive = activeSortType === title ? true : false;

  return <li
    className={`places__option` + (isActive ? ` places__option--active` : ``)}
    tabIndex="0"
    onClick={onSortingChange}
  >{title}
  </li>;
};

SortingItem.propTypes = {
  title: PropTypes.string.isRequired,
  activeSortType: PropTypes.string.isRequired,
  onSortingChange: PropTypes.func.isRequired,
};

export default SortingItem;
