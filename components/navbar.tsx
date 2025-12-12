"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { itemsNavbar } from "@/data"; // Asumo que importas esto aquí

import { MotionTransition } from "./transition-component";

const Navbar = () => {
  const router = usePathname();

  // Función para asignar el nombre legible a partir del título de la data
  const getNavItemName = (title: string, link: string) => {
    switch (link) {
      case "/":
        return "Inicio";
      case "/about-me":
        return "Sobre Mí";
      case "/services":
        return "Mis Servicios";
      case "/portfolio":
        return "Portafolio";
      case "/certificates":
        return "Certificados";
      default:
        return title; // Retorna el título de la data si no coincide
    }
  };

  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
    >
      <nav>
        <div className="flex items-center justify-center gap-4 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md shadow-2xl border border-white/10">
          {itemsNavbar.map((item) => {
            const isCurrentPath = router === item.link;
            const navItemName = getNavItemName(item.title, item.link);

            return (
              <div
                key={item.id}
                className={`flex items-center transition duration-200 rounded-full cursor-pointer 
                                    ${
                                      isCurrentPath
                                        ? "bg-secondary text-white scale-105 shadow-lg"
                                        : "text-gray-300 hover:bg-white/10"
                                    }
                                `}
                data-tooltip-target="tooltip-default"
              >
                <Link
                  href={item.link}
                  className="flex items-center gap-2 px-4 py-2"
                >
                  <div className="text-xl">{item.icon}</div>

                  <span
                    className={`text-sm font-medium whitespace-nowrap hidden md:inline-block 
                                        ${
                                          isCurrentPath
                                            ? "text-white"
                                            : "text-gray-300 group-hover:text-white"
                                        }`}
                  >
                    {navItemName}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
