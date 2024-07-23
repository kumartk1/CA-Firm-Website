import React from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import { divIcon, Icon, point } from 'leaflet';
import locationPin from '../../assets/contact assets/location-pin-svgrepo-com.svg';
import MarkerClusterGroup from 'react-leaflet-cluster';

const Map = () => {
  const markers = [
    {
      geocode: [30.839632, 76.184158],
      popup: "Rahul Grover's Home"
    },
  ];

  const customIcon = new Icon({
    iconUrl: locationPin,
    iconSize: [50, 50]
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div className='cluster-icon'>${cluster.getChildCount()}</div>`,
      className: 'custom-marker-cluster',
      iconSize: point(33, 33, true)
    });
  };

  return (
    <MapContainer center={[30.839632, 76.184158]} zoom={13} className="z-1">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}>
        {
          markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIcon}>
              <Popup>
                <p>{marker.popup}</p>
              </Popup>
            </Marker>
          ))
        }
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
