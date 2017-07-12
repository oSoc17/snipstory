import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './partials/Marker';

const addMarker = (e, module, handleChange, index) => {
  handleChange(
    Object.assign({}, module, {
      markers: [...module.markers, { lat: e.lat, lng: e.lng }]
    }),
    index
  );
};

const MapModule = (
  { module, handleChange, index },
  center = { lat: 59.95, lng: 30.33 },
  zoom = 3
) => {
  return (
    <div style={{ width: `100%`, height: '400px' }}>
      <GoogleMapReact
        defaultCenter={center}
        defaultZoom={zoom}
        onClick={e => {
          this.addMarker(e, module, handleChange, index);
        }}
      >
        {module.markers &&
          module.markers.map((marker, index) =>
            <Marker key={index} lat={marker.lat} lng={marker.lng} />
          )}
      </GoogleMapReact>
    </div>
  );
};

export default MapModule;
