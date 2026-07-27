"use client";

import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

export default function Ubicacion() {
  const map = useMap();

  return (
    <div className="absolute center-10 bottom-15 z-1000 flex flex-col gap-1 p-2">
      <button onClick={() => map.zoomIn()}>
        <CiSquarePlus className="w-10 h-10 " />
      </button>

      <button onClick={() => map.zoomOut()}>
        <CiSquareMinus className="w-10 h-10" />
      </button>
    </div>
  );
}
