import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";

const logoImg = `logo.svg`;

const Logo = () => {
  return <Link to={`${AppRoute.ROOT}`} className="header__logo-link header__logo-link--active">
    <img className="header__logo" src={`/img/${logoImg}`} alt="6 cities logo" width="81" height="41"/>
  </Link>;
};

export default React.memo(Logo);
