import React from "react";
import Main from "../main/main.jsx";
import Favorites from "../favorites/favorites.jsx";
import Property from "../property/property.jsx";

import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import SignIn from "../sign-in/sign-in.jsx";
import {AppRoute} from "../../const.js";
import withPrivateRoute from "../../hocs/with-private-route/with-private-route.jsx";

const App = () => {
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
};

export {App};
export default App;
