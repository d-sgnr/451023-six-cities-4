import React from "react";
import PropTypes from "prop-types";

const HeaderLogoWrap = (props) => {
  const {children} = props;

  return <div className="header__left">
    {children}
  </div>;
};

HeaderLogoWrap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default React.memo(HeaderLogoWrap);
