
import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

const MAP_ICON = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
  }

  componentDidMount() {
    this._initMap();
  }

  componentDidUpdate() {
    this.map.remove();

    this._initMap();
  }

  componentWillUnmount() {
    this.map.remove();
  }

  _initMap() {
    const {coordinates, city} = this.props;

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

      coordinates.map((coordinate) => {
        leaflet
        .marker(coordinate, {MAP_ICON})
        .addTo(this.map);
      });
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
  coordinates: PropTypes.array.isRequired
};

export default Map;
