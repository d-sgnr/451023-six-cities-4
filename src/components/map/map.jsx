
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
    const {coordinates} = this.props;

    const city = [52.38333, 4.9];
    const zoom = 12;

    const mapContainer = this._mapRef.current;

    if (mapContainer) {

      const map = leaflet.map(mapContainer, {
        center: city,
        zoom,
        zoomControl: false,
        marker: true,
      });

      map.setView(city, zoom);

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(map);

      coordinates.map((coordinate) => {
        leaflet
        .marker(coordinate, {MAP_ICON})
        .addTo(map);
      });
    }
  }

  componentWillUnmount() {
    // const mapContainer = this._mapRef.current;
  }

  render() {
    return <div style={{height: `100%`}}
      ref={this._mapRef}></div>;
  }
}

Map.propTypes = {
  coordinates: PropTypes.array.isRequired
};

export default Map;
