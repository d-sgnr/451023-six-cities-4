import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {PageType} from "../../const.js";

import {connect} from "react-redux";
import {getPage} from "../../reducer/app/selectors.js";

import {getOffers} from "../../reducer/data/selectors.js";

class App extends PureComponent {

  _renderAppScreen() {
    const {
      page
    } = this.props;

    if (page === PageType.PROPERTY) {
      return (
        <Property/>
      );
    } return (
      <Main/>);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderAppScreen()}
          </Route>
          <Route exact path="/dev-property">
            <Property/>
          </Route>
        </Switch>
      </BrowserRouter>
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
