import React from "react";

const logoImg = `logo.svg`;

const Logo = () => {
  return <a className="header__logo-link header__logo-link--active">
    <img className="header__logo" src={`img/${logoImg}`} alt="6 cities logo" width="81" height="41"/>
  </a>;
};

export default React.memo(Logo);
