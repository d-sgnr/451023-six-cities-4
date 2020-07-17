import React from "react";
import PropTypes from "prop-types";
import SortingList from "../sorting-list/sorting-list.jsx";
import {connect} from "react-redux";

import withActiveState from "../../hocs/with-active-state/with-active-state.jsx";

const Sorting = (props) => {
  const {activeSortType, onActiveChange} = props;

  return <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption" style={{marginRight: `16px`}}>Sort by</span>
    <span
      className="places__sorting-type"
      tabIndex="0"
      onClick={onActiveChange}
    >
      {activeSortType}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    {props.isActive ?
      <SortingList
        activeSortType={activeSortType}
      /> : ``
    }
  </form>;
};

Sorting.propTypes = {
  isActive: PropTypes.bool.isRequired,
  activeSortType: PropTypes.string.isRequired,
  onActiveChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeSortType: state.activeSortType,
});

export {Sorting};

export default withActiveState(connect(mapStateToProps, null)(Sorting));
