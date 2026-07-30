"use client";

import { BsFillSuitcase2Fill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsSuitcase2 } from "react-icons/bs";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function NavBar() {
  const [currentMenu, setCurrentMenu] = useState<
    | "none"
    | "dispositivos"
    | "agregar"
    | "cuenta"
    | "iniciarSesion"
    | "crearCuenta"
  >("none");

  const menuRef = useRef<HTMLDivElement>(null);
  const menuTwo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !menuTwo.current?.contains(event.target as Node)
      ) {
        setCurrentMenu("none");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative flex justify-between  p-2 z-50">
      <div>
        <BsFillSuitcase2Fill className="h-8 w-8 text-orange-600" />
      </div>

      <div className="relative flex items-center gap-8  rounded-4xl p-2 text-lg bg-white">
        <h1>Mi Maleta</h1>
        <button onClick={() => setCurrentMenu("dispositivos")}>
          <IoMdArrowDropdown className="w-6 h-6" />
        </button>

        {currentMenu === "dispositivos" && (
          <div
            ref={menuRef}
            className="absolute flex flex-col left-0 top-full mt-2 rounded-xl  bg-white p-2 gap-2"
          >
            <div className="flex bg-gray-400 rounded-xl p-2 gap-2">
              <BsSuitcase2 className="w-6 h-6" />
              <ul>
                <li>Maleta 01</li>
              </ul>
            </div>

            <button
              onClick={() => setCurrentMenu("agregar")}
              className="bg-blue-400 rounded-xl p-2 text-center"
            >
              Agregar
            </button>
          </div>
        )}

        {currentMenu === "agregar" && (
          <div className="fixed left-1/2 flex flex-col -translate-x-1/2 top-1/2 -translate-y-1/2 mt-2 rounded-xl  bg-white p-2 gap-2">
            <p>Test</p>
          </div>
        )}
      </div>

      <div className="relative ">
        <button onClick={() => setCurrentMenu("cuenta")}>
          <FaUser className="w-7 h-7 text-blue-600" />
        </button>

        {currentMenu === "cuenta" && (
          <div
            ref={menuTwo}
            className="absolute flex flex-col right-0 mt-6 w-40 rounded-lg bg-white shadow-lg text-lg  gap-2 p-2"
          >
            <button
              onClick={() => setCurrentMenu("iniciarSesion")}
              className="block px-4 bg-amber-400 rounded-xl "
            >
              Iniciar sesion
            </button>

            <button
              onClick={() => setCurrentMenu("crearCuenta")}
              className="block px-4 bg-blue-400 rounded-xl"
            >
              Crear cuenta
            </button>
          </div>
        )}

        {currentMenu === "crearCuenta" && (
          <div className="fixed left-1/2 flex flex-col -translate-x-1/2 top-1/2 -translate-y-1/2  mt-6 rounded-lg bg-white shadow-lg text-lg  gap-2 p-2">
            <p>Crear</p>
          </div>
        )}

        {currentMenu === "iniciarSesion" && (
          <div className="fixed left-1/2 flex flex-col -translate-x-1/2 top-1/2 -translate-y-1/2  mt-6  rounded-lg bg-white shadow-lg text-lg  gap-2 p-2">
            <p>Sesion</p>
          </div>
        )}
      </div>
    </nav>
  );
}
