"use client";

import { BsFillSuitcase2Fill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { BsSuitcase2 } from "react-icons/bs";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState<"dispositivos" | "cuenta" | null>(
    null,
  );

  const [showAgregar, setShowAgregar] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <nav ref={menuRef} className="relative flex justify-between  p-2 z-50">
      <div>
        <BsFillSuitcase2Fill className="h-8 w-8 text-orange-600" />
      </div>

      <div className="relative flex items-center gap-8  rounded-4xl p-2 text-lg bg-white">
        <h1>Mi Maleta</h1>
        <button
          onClick={() =>
            setOpenMenu(openMenu === "dispositivos" ? null : "dispositivos")
          }
        >
          <IoMdArrowDropdown className="w-6 h-6" />
        </button>

        {openMenu === "dispositivos" && (
          <div className="absolute flex flex-col left-0 top-full mt-2 rounded-xl  bg-white p-2 gap-2">
            <div className="flex bg-gray-400 rounded-xl p-2 gap-2">
              <BsSuitcase2 className="w-6 h-6" />
              <ul>
                <li>Maleta 01</li>
              </ul>
            </div>

            <button
              onClick={() => setShowAgregar(!showAgregar)}
              className="bg-blue-400 rounded-xl p-2 text-center"
            >
              Agregar
            </button>
            {showAgregar && (
              <div className="flex bg-amber-100 absolute">
                <p>Test</p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="relative">
        <button
          onClick={() => setOpenMenu(openMenu === "cuenta" ? null : "cuenta")}
        >
          <FaUser className="w-7 h-7 text-blue-600" />
        </button>

        {openMenu === "cuenta" && (
          <div className="absolute flex flex-col right-0 mt-6 w-40 rounded-lg bg-white shadow-lg text-lg  gap-2 p-2">
            <Link href="/login" className="block px-4 bg-amber-400 rounded-xl ">
              Iniciar sesion
            </Link>

            <Link
              href="/crear-cuenta"
              className="block px-4 bg-blue-400 rounded-xl"
            >
              Crear cuenta
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
