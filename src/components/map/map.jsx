
import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

import {connect} from "react-redux";

const MAP_ICONS_IMG = {
  DEFAULT: `../../img/pin.svg`,
  ACTIVE: `../../img/pin-active.svg`,
};

const MAP_ICON = {
  iconSize: [30, 44.4],
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
    const {coordinates, hoveredOffer} = this.props;
    coordinates.map((coordinate) => {
      MAP_ICON.iconUrl = MAP_ICONS_IMG.DEFAULT;

      if (hoveredOffer) {
        if (hoveredOffer.coordinates === coordinate) {
          MAP_ICON.iconUrl = MAP_ICONS_IMG.ACTIVE;
        }
      }

      leaflet
      .marker(coordinate, {icon: leaflet.icon(MAP_ICON)})
      .addTo(this.map);
    });
  }

  _initMap() {

    const {coordinates, city} = this.props;

    this.setState({
      coordinates,
    });

    const cityCoordinates = city.coordinates;

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
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.array.isRequired,
  }).isRequired,
  coordinates: PropTypes.array.isRequired,
  hoveredOffer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    coordinates: PropTypes.array.isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      coordinates: PropTypes.array.isRequired,
    }).isRequired,
    pictures: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
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
  }),
};

const mapStateToProps = (state) => ({
  hoveredOffer: state.hoveredOffer,
});

export {Map};
export default connect(mapStateToProps, null)(Map);
