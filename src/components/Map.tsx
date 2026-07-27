"use client";

import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";

import { MdOutlineMyLocation } from "react-icons/md";
import { seguirLocalizacion } from "@/utils/geolocation";
import Ubicacion from "./Ubicacion";

type Position = [number, number];

export default function Mapa() {
  const [position, setPosition] = useState<Position>([25.6866, -100.3161]);

  const mapRef = useRef<LeafletMap | null>(null);
  const centeredOnce = useRef(false);

  useEffect(() => {
    const watchId = seguirLocalizacion((coords) => {
      setPosition(coords);

      // Centrar al iniciar
      if (!centeredOnce.current && mapRef.current) {
        mapRef.current.flyTo(coords, 16, {
          animate: true,
        });

        centeredOnce.current = true;
      }
    });

    return () => {
      if (watchId !== undefined) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  return (
    <MapContainer
      ref={mapRef}
      center={position}
      zoom={13}
      zoomControl={false}
      className="relative h-full w-full rounded-xl"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <Marker position={position}>
        <Popup>Mi ubicación</Popup>
      </Marker>

      <Ubicacion />

      <button
        type="button"
        onClick={() => {
          if (mapRef.current) {
            mapRef.current.flyTo(position, mapRef.current.getZoom(), {
              animate: true,
            });
          }
        }}
        className="absolute right-5 bottom-20 z-[1000] rounded-full bg-white p-2 shadow-lg hover:bg-gray-100"
        aria-label="Ir a mi ubicación"
      >
        <MdOutlineMyLocation className="h-8 w-8" />
      </button>
    </MapContainer>
  );
}
