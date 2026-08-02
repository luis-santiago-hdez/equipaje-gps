"use client";

import dynamic from "next/dynamic";

import NavBar from "@/components/NavBar";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import AddSuitcase from "@/components/modals/AddSuitcaseModal";
import StatusModal from "@/components/modals/StatusModal";

import BateriaStatus from "@/components/BateriaStatus";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState<
    "login" | "register" | "addSuitcase" | null
  >(null);

  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  console.log("status:", status);
  return (
    <main className="relative h-screen flex flex-col p-3 gap-4">
      <NavBar setOpenModal={setOpenModal} />

      <LoginModal
        open={openModal === "login"}
        onClose={() => setOpenModal(null)}
      />

      <RegisterModal
        open={openModal === "register"}
        onClose={() => setOpenModal(null)}
        setStatus={setStatus}
      />

      {status !== "idle" && <StatusModal status={status} />}

      <AddSuitcase
        open={openModal === "addSuitcase"}
        onClose={() => setOpenModal(null)}
      />

      <div className="absolute inset-0 z-0">
        <Map />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-50 bg-gray-300 p-2">
        <BateriaStatus />
      </div>
    </main>
  );
}
