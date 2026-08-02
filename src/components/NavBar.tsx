"use client";

import { useState, useEffect, useRef } from "react";

import { BsFillSuitcase2Fill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiRollingSuitcase } from "react-icons/ci";

type NavbarProps = {
  setOpenModal: React.Dispatch<
    React.SetStateAction<"login" | "register" | "addSuitcase" | null>
  >;
};

export default function NavBar({ setOpenModal }: NavbarProps) {
  const [currentMenu, setCurrentMenu] = useState<
    "none" | "dispositivos" | "cuenta"
  >("none");

  const menuRef = useRef<HTMLDivElement>(null);
  const menuTwo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        currentMenu === "dispositivos" &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setCurrentMenu("none");
        return;
      }

      if (
        currentMenu === "cuenta" &&
        menuTwo.current &&
        !menuTwo.current.contains(event.target as Node)
      ) {
        setCurrentMenu("none");
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [currentMenu]);

  return (
    <nav className="relative flex justify-between  p-2 z-50">
      <BsFillSuitcase2Fill className="h-8 w-8 text-orange-600" />

      <div className="relative flex items-center gap-8  rounded-4xl p-2 text-lg bg-white">
        <h1>Mi Maleta</h1>
        <button onClick={() => setCurrentMenu("dispositivos")}>
          <IoMdArrowDropdown className="w-6 h-6" />
        </button>

        {currentMenu === "dispositivos" && (
          <div
            ref={menuRef}
            className="absolute flex flex-col top-0 mt-15  rounded-lg bg-white shadow-lg text-lg  gap-2 p-2"
          >
            <div className="flex bg-gray-400 rounded-lg p-2">
              <CiRollingSuitcase className="w-7 h-7" />
              <ul>
                <li>Maleta 01</li>
              </ul>
            </div>
            <button
              onClick={() => {
                setCurrentMenu("none");
                setOpenModal("addSuitcase");
              }}
              className="whitespace-nowrap bg-green-400 rounded-xl p-2 "
            >
              Agregar Maleta
            </button>
          </div>
        )}
      </div>

      <div className="relative">
        <button onClick={() => setCurrentMenu("cuenta")}>
          <FaUser className="w-7 h-7 text-blue-600" />
        </button>

        {currentMenu === "cuenta" && (
          <div
            ref={menuTwo}
            className="absolute flex flex-col right-0 mt-6 w-40 rounded-lg bg-white shadow-lg text-lg  gap-2 p-2"
          >
            <button
              onClick={() => {
                setCurrentMenu("none");
                setOpenModal("login");
              }}
              className="block px-4 bg-amber-400 rounded-xl "
            >
              Iniciar sesion
            </button>

            <button
              onClick={() => {
                setCurrentMenu("none");
                setOpenModal("register");
              }}
              className="block px-4 bg-blue-400 rounded-xl"
            >
              Crear cuenta
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
