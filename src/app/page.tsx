"use client";

import dynamic from "next/dynamic";

import NavBar from "@/components/NavBar";

import BateriaStatus from "@/components/BateriaStatus";

import Ubicacion from "@/components/Ubicacion";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative h-screen flex flex-col p-3 gap-4">
      <NavBar />
      <div className="absolute inset-0 z-0">
        <Map />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-50 bg-gray-300 p-2">
        <BateriaStatus />
      </div>
    </main>
  );
}
