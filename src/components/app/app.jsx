import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {PageType} from "../../const.js";

import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

class App extends PureComponent {

  _renderAppScreen() {
    const {
      city,
      page,
      onCityClick
    } = this.props;

    if (page === PageType.PROPERTY) {
      return (
        <Property/>
      );
    } return (
      <Main
        city={city}
        onCityClick={onCityClick}
      />);
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
  offers: PropTypes.array.isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.array.isRequired,
  }).isRequired,
  page: PropTypes.oneOf([
    PageType.INDEX,
    PageType.PROPERTY
  ]).isRequired,
  onCityClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city,
  page: state.page,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
