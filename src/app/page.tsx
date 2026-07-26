"use client";

import dynamic from "next/dynamic";

import NavBar from "@/components/NavBar";

import BateriaStatus from "@/components/BateriaStatus";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="h-full flex flex-col p-3 gap-4">
      <NavBar />
      <div className="flex-1 min-h-0">
        <Map />
      </div>

      <BateriaStatus />
    </main>
  );
}
