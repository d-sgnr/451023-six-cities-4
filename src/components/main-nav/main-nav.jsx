import React from "react";
import PropTypes from "prop-types";
import {getAuthorizationStatus, getUserEmail} from "../../reducer/user/selectors.js";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";

const MainNav = (props) => {
  const {authorizationStatus, userEmail} = props;

  return <nav className="header__nav">
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        {authorizationStatus === AuthorizationStatus.AUTH ?
          <Link to={`${AppRoute.FAVORITES}`} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">
              {userEmail}
            </span>
          </Link> :
          <Link to={`${AppRoute.LOGIN}`} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">
              {`Sign In`}
            </span>
          </Link>
        }
      </li>
    </ul>
  </nav>;
};

MainNav.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userEmail: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userEmail: getUserEmail(state),
});

export {MainNav};
export default connect(mapStateToProps)(React.memo(MainNav));
