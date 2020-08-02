import React from "react";
import PropTypes from "prop-types";

import FavoritesList from "../favorites-list/favorites-list.jsx";
import Header from "../header/header.jsx";
import MainNav from "../main-nav/main-nav.jsx";
import HeaderLogoWrap from "../header-logo-wrap/header-logo-wrap.jsx";
import Logo from "../logo/logo.jsx";
import FavoritesEmpty from "../favorites-empty/favorites-empty.jsx";
import {connect} from "react-redux";

import {Operation as DataOperation} from "../../reducer/data/data.js";

import {getUserName} from "../../reducer/app/selectors.js";
import {getFavoriteOffers, getFavoriteCities} from "../../reducer/data/selectors.js";
import {PropertyType} from "../../const.js";

class Favorites extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadFavoriteOffers} = this.props;
    loadFavoriteOffers();
  }

  render() {
    const {favoriteOffers, favoriteCities, userName} = this.props;

    return <div className={`page` + favoriteOffers.length === 0 ? ` page--favorites-empty` : ``}>
      <Header>
        <HeaderLogoWrap>
          <Logo/>
        </HeaderLogoWrap>
        <MainNav
          userName={userName}
        />
      </Header>

      <main className={`page__main page__main--favorites` + favoriteOffers.length === 0 ? ` page__main-favorites--empty` : ``}>
        <div className="page__favorites-container container">
          {favoriteOffers.length === 0 ?
            <FavoritesEmpty/> :
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList
                offers={favoriteOffers}
                offersType={PropertyType.FAVORITE}
                cities={favoriteCities}
              />
            </section>}
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>;
  }
}

Favorites.propTypes = {
  favoriteCities: PropTypes.array.isRequired,
  loadFavoriteOffers: PropTypes.func.isRequired,
  favoriteOffers: PropTypes.array.isRequired,
  userName: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteOffers: getFavoriteOffers(state),
  userName: getUserName(state),
  favoriteCities: getFavoriteCities(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteOffers: () => {
    dispatch(DataOperation.loadFavoriteOffers());
  }
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
