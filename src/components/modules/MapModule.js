import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './partials/Marker';

class MapModule extends React.Component {
  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 3
  };

  render() {
    const Markers =
      this.props.markers &&
      this.props.markers.map((marker, index) => {
        return <Marker key={index} lat={marker.lat} lng={marker.lng} />;
      });

    return (
      <div style={{ width: `100%`, height: '400px' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={this.props.addMarker}
        >
          {Markers}
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapModule;

// Parent component code
// state = {
//     markers: []
//   };

//   addMarker(event) {
//     this.setState(prevState =>
//       prevState.markers.push({ lat: event.lat, lng: event.lng })
//     );
//   }

//   render() {
//     return (
//       <MapModule
//         markers={this.state.markers}
//         addMarker={this.addMarker.bind(this)}
//       />
//     );
//   }
