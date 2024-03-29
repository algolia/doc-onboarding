import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

import { Airports } from './Airports'

export function Map() {
  return (
    <MapContainer
      className="map"
      center={[48.85, 2.35]}
      zoom={10}
      minZoom={4}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Airports />
    </MapContainer>
  )
}
