import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import { Container } from './styles';

const Map: React.FC = () => {
  return (
    <Container>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ position: 'relative' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Container>
  );
};

export default Map;
