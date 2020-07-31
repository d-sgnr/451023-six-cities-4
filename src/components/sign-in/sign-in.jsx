import React from "react";
import PropTypes from "prop-types";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import Header from "../header/header.jsx";
import MainNav from "../main-nav/main-nav.jsx";
import HeaderLogoWrap from "../header-logo-wrap/header-logo-wrap.jsx";
import Logo from "../logo/logo.jsx";
import {Redirect} from "react-router-dom";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {connect} from "react-redux";
import SignInForm from "../sign-in-form/sign-in-form.jsx";
import {AppRoute} from "../../const.js";

const SignIn = (props) => {
  const {authorizationStatus} = props;

  switch (authorizationStatus) {
    case AuthorizationStatus.AUTH:
      return <Redirect from={AppRoute.LOGIN} to={AppRoute.ROOT} />;
    case AuthorizationStatus.NO_AUTH:
      return (<div className="page page--gray page--login">
        <Header>
          <HeaderLogoWrap>
            <Logo/>
          </HeaderLogoWrap>
          <MainNav/>
        </Header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <SignInForm/>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
      );
  } return ``;
};

SignIn.propTypes = {
  authorizationStatus: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {SignIn};
export default connect(mapStateToProps)(React.memo(SignIn));

