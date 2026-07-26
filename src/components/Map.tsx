"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  return (
    <MapContainer
      center={[25.6866, -100.3161]}
      zoom={13}
      className="relative w-full h-full rounded-xl z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap"
      />

      <Marker position={[25.6866, -100.3161]}>
        <Popup>Mi Maleta</Popup>
      </Marker>
    </MapContainer>
  );
}
