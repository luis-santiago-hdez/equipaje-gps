"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import Ubicacion from "./Ubicacion";
import { MdOutlineMyLocation } from "react-icons/md";

import { useEffect } from "react";
import { useMap } from "react-leaflet";

function ChangeMapView({ center }: { center: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);

  return null;
}

export default function Map() {
  const [position, setPosition] = useState<[number, number]>([
    25.6865, -100.3161,
  ]);

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocalizacion no soportado.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (location) => {
        const { latitude, longitude } = location.coords;

        setPosition([latitude, longitude]);
      },
      (error) => {
        alert(error.message);
      },
    );
  };
  return (
    <MapContainer
      center={position}
      zoom={13}
      zoomControl={false}
      className="relative w-full h-full rounded-xl z-0"
    >
      <ChangeMapView center={position} />

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap"
      />

      <Marker position={position}>
        <Popup>Mi Ubicacion</Popup>
      </Marker>
      <Ubicacion />
      <div className="absolute right-5 bottom-20 z-1000 flex flex-col gap-1 p-2">
        <button onClick={getCurrentLocation}>
          <MdOutlineMyLocation className="w-8 h-8" />
        </button>
      </div>
    </MapContainer>
  );
}
