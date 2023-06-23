import { useEffect, useState } from "react";
import { useScrollDirection } from "../hooks/useScrollDirection"

export default function Header() {
  const scrollDirection = useScrollDirection();
  // Mobile detection hook so that the navbar can be conditionally rendered
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return (
    <>

      {matches &&
        // DESKTOP NAVBAR
        <div className={`${scrollDirection === "down" ? "-top-24" : "top-0"} navbar flex items-center rounded-b-2xl px-6 bg-card sticky w-full z-50 transition-all duration-500`}>
          <a
            href="#"
            className="text-body rounded-lg hover:bg-[#4c515e] p-5 transition-all duration-1000 focus:outline-none">
            <img className="object-contain w-24" src="../wlogo.svg" />
          </a>
          <div className="ml-auto p-6 font-mukta space-x-3">
            <a
              href="#exp"
              className="text-body rounded-lg hover:bg-[#4c515e] p-5 transition-all duration-1000 focus:outline-none">Experience
            </a>
            <a
              href="#proj"
              className="text-body rounded-lg hover:bg-[#4c515e] p-5 transition-all duration-1000 focus:outline-none">Projects</a>
            <a
              href="#skills"
              className="text-body rounded-lg hover:bg-[#4c515e] p-5 transition-all duration-1000 focus:outline-none">Skills</a>
            <a
              href="#contact"
              className="text-body rounded-lg hover:bg-[#4c515e] p-5 transition-all duration-1000 focus:outline-none">Contact</a>
          </div>
        </div>
      }
      {!matches &&
        // MOBILE NAVBAR
        <div className={`${scrollDirection === "down" ? "-top-24" : "top-0"} navbar flex items-center rounded-b-2xl px-6 bg-card sticky w-full z-50 space-x-3 transition-all duration-500`}>
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-card rounded-box w-52">
                <li><a href="#exp">Experience</a></li>
                <li><a href="#proj">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <a
            href="#"
            className="flex-1 text-body rounded-lg hover:bg-[#4c515e] p-3 transition-all duration-1000 focus:outline-none">
            <img className="object-contain w-10 ml-auto" src="../favicon.svg" />
          </a>
        </div>
      }
    </>
  )
}