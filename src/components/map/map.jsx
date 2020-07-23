
import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {offerType, cityType} from "../../proptypes/proptypes.jsx";
import {connect} from "react-redux";
import {getHoveredOffer} from "../../reducer/app/selectors.js";

const MapIconType = {
  DEFAULT: `../../img/pin.svg`,
  ACTIVE: `../../img/pin-active.svg`,
};

const MAP_ICON_SIZE = [30, 44.4];

const MAP_ICON = {
  iconUrl: MapIconType.DEFAULT,
  iconSize: MAP_ICON_SIZE,
};

const MAP_ICON_ACTIVE = {
  iconUrl: MapIconType.ACTIVE,
  iconSize: MAP_ICON_SIZE,
};

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();

    this.state = {
      coordinates: this.props.coordinates,
    };
  }

  componentDidMount() {
    this._initMap();
  }

  componentDidUpdate() {
    const {coordinates} = this.props;

    if (coordinates.toString() !== this.state.coordinates.toString()) {

      this.map.remove();
      this._initMap();
    }
    this._placeMapIcons();
  }

  componentWillUnmount() {
    this.map.remove();
  }

  _placeMapIcons() {
    const {activeOffer, coordinates, hoveredOffer} = this.props;

    const getCoordinatesArray = (offer, string = false) => {
      if (offer) {
        if (string) {
          return Array.of(offer.location.latitude, offer.location.longitude).toString();
        } return Array.of(offer.location.latitude, offer.location.longitude);
      } return null;
    };

    const hoveredOfferCoordinates = getCoordinatesArray(hoveredOffer, true);

    coordinates.map((coordinate) => {
      const mapIcon = hoveredOfferCoordinates === coordinate.toString() ? MAP_ICON_ACTIVE : MAP_ICON;

      leaflet
      .marker(coordinate, {icon: leaflet.icon(mapIcon)})
      .addTo(this.map);
    });

    if (activeOffer) {
      const activeOfferCoordinates = getCoordinatesArray(activeOffer);
      const mapIcon = MAP_ICON_ACTIVE;

      leaflet
      .marker(activeOfferCoordinates, {icon: leaflet.icon(mapIcon)})
      .addTo(this.map);
    }
  }

  _initMap() {

    const {coordinates, city} = this.props;

    this.setState({
      coordinates,
    });

    const cityCoordinates = Array.of(city.location.latitude, city.location.longitude);

    const zoom = 12;

    const mapContainer = this._mapRef.current;

    if (mapContainer) {

      this.map = leaflet.map(mapContainer, {
        center: cityCoordinates,
        zoom,
        zoomControl: false,
        marker: true,
      });

      this.map.setView(cityCoordinates, zoom);

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this.map);

      this._placeMapIcons();
    }
  }

  render() {
    return <div style={{height: `100%`}}
      ref={this._mapRef}></div>;
  }
}

Map.propTypes = {
  city: cityType,
  coordinates: PropTypes.array.isRequired,
  hoveredOffer: offerType,
  activeOffer: offerType,
};

const mapStateToProps = (state) => ({
  hoveredOffer: getHoveredOffer(state),
});

export {Map};
export default connect(mapStateToProps)(Map);
