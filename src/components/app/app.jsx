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
      offers,
      city,
      page,
      activeOffer,
      onCityClick
    } = this.props;

    if (page === PageType.PROPERTY) {
      return <Property
        card={activeOffer}
      />;
    } return <Main
      offers={offers}
      city={city}
      onCityClick={onCityClick}
    />;
  }

  render() {
    const {
      activeOffer
    } = this.props;

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderAppScreen()};
        </Route>
        <Route exact path="/dev-property">
          <Property
            card={activeOffer}
          />
        </Route>
      </Switch>
    </BrowserRouter>;
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
  activeOffer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    coordinates: PropTypes.array.isRequired,
    pictures: PropTypes.array.isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      coordinates: PropTypes.array.isRequired,
    }).isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    description: PropTypes.array.isRequired,
    bedroomsCount: PropTypes.number.isRequired,
    guestsCount: PropTypes.number.isRequired,
    appliances: PropTypes.array.isRequired,
    host: PropTypes.shape({
      picture: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired,
    }),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city,
  page: state.page,
  activeOffer: state.activeOffer,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
