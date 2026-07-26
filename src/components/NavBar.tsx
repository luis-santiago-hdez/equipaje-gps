"use client";

import { BsFillSuitcase2Fill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineAddLocationAlt } from "react-icons/md";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState<"dispositivos" | "cuenta" | null>(
    null,
  );

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
    <nav
      ref={menuRef}
      className="relative flex border justify-between rounded-2xl p-2 z-50"
    >
      <div>
        <BsFillSuitcase2Fill className="h-8 w-8 text-orange-600" />
      </div>

      <div className="relative flex items-center gap-8 border rounded-4xl p-1 text-lg">
        <h1>Mi Maleta</h1>
        <button
          onClick={() =>
            setOpenMenu(openMenu === "dispositivos" ? null : "dispositivos")
          }
        >
          <IoMdArrowDropdown className="w-6 h-6" />
        </button>

        {openMenu === "dispositivos" && (
          <div className="absolute flex flex-col left-0 top-full mt-6 rounded-lg border bg-white p-2 z-50">
            <ul>
              <li>Maleta 01</li>
            </ul>
            <div className="flex gap-1">
              <Link href="/agregar">Agregar</Link>
              <MdOutlineAddLocationAlt className="w-6 h-6" />
            </div>
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
          <div className="absolute right-0 mt-6 w-40 rounded-lg bg-white shadow-lg text-lg border ">
            <Link href="/login" className="block px-4">
              Iniciar sesion
            </Link>
            <Link href="/crear-cuenta" className="block px-4">
              Crear cuenta
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
