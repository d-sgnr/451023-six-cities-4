import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import Favorites from "../favorites/favorites.jsx";
import Property from "../property/property.jsx";

import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import {PageType} from "../../const.js";
import SignIn from "../sign-in/sign-in.jsx";
import {connect} from "react-redux";
import {getPage} from "../../reducer/app/selectors.js";
import {getOffers} from "../../reducer/data/selectors.js";
import {AppRoute} from "../../const.js";
import withPrivateRoute from "../../hocs/with-private-route/with-private-route.jsx";

class App extends PureComponent {

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact path={AppRoute.ROOT}
            component={Main}
          />
          <Route
            exact path={`${AppRoute.PROPERTY}/:id`}
            component={Property}
          />
          <Route
            exact path={AppRoute.LOGIN}
            component={SignIn}
          />
          <Route
            exact path={AppRoute.FAVORITES}
            component={withPrivateRoute(Favorites)}
          />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  page: PropTypes.oneOf([
    PageType.INDEX,
    PageType.PROPERTY
  ]).isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  page: getPage(state),
});

export {App};
export default connect(mapStateToProps)(App);
