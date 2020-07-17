import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  const {children} = props;

  return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        {children}
      </div>
    </div>
  </header>;
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default React.memo(Header);
