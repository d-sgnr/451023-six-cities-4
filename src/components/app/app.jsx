import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {placesCount, offers} = this.props;

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            placesCount = {placesCount}
            offers={offers}
          />;
        </Route>
        <Route exact path="/dev-property">
          <Property
            card={offers[1]}
          />;
        </Route>
      </Switch>
    </BrowserRouter>;
  }
}

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
};

export default App;
