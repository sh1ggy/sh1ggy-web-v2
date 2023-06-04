import { useEffect } from "react";
import { useScrollDirection } from "../hooks/useScrollDirection"

export function Header() {
  const scrollDirection = useScrollDirection();
  return (
    <div
      className={`${ scrollDirection === "down" ? "-top-24" : "top-0"} transition-all duration-500 flex items-center rounded-b-2xl px-6 bg-card sticky w-full z-50`}
    >
      <a
        href="#"
        className="text-body rounded-lg hover:bg-[#4c515e] p-5 transition-all duration-1000 focus:outline-none"
      >
        <img className="object-contain w-24" src="../wlogo.svg" />
      </a>
      <div className="ml-auto p-6 font-mukta">
        <a
          href="#exp"
          className="text-body rounded-lg hover:bg-[#4c515e] p-5 transition-all duration-1000 focus:outline-none"
        >Experience
        </a>
        <a
          href="#proj"
          className="text-body rounded-lg hover:bg-[#4c515e] p-5 transition-all duration-1000 focus:outline-none"
        >Projects</a>
        <a
          href="#skills"
          className="text-body rounded-lg hover:bg-[#4c515e] p-5 transition-all duration-1000 focus:outline-none"
        >Skills</a>
        <a
          href="#contact"
          className="text-body rounded-lg hover:bg-[#4c515e] p-5 transition-all duration-1000 focus:outline-none"
        >Contact</a>
      </div>
    </div>
  )
}