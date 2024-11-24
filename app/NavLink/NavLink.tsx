"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

type NavLinkProps = {
  colorScheme: "black" | "white";
};

const NavLink = ({ colorScheme }: NavLinkProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const bgClass = colorScheme === "black" ? "bg-[#1f2020]" : "bg-[#fff7ed]";
  const textClass = colorScheme === "black" ? "text-[#fff7ed]" : "text-black";
  const hoverClass =
    colorScheme === "black" ? "hover:text-gray-300" : "hover:text-gray-200";

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="w-10/12 mx-auto mt-4">
      <nav
        className={`${bgClass} max-w-screen-xl mx-auto border-gray-200 rounded-xl fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 w-auto">
            <span
              className={`${textClass} self-center text-4xl font-semibold whitespace-nowrap`}
            >
              Robin©
            </span>
          </Link>
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm ${textClass} rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200`}
              aria-controls="navbar-default"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:text-xl md:w-auto items-center justify-center md:flex`}
            id="navbar-default"
          >
            <ul
              className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg ${bgClass} md:flex-row md:space-x-8 md:mt-0 md:border-0`}
            >
              <li
                className={`hover:scale-110 transition ease-in-out duration-300 ${hoverClass}`}
              >
                <Link
                  href="/Aboutme"
                  className={`block py-2 px-6 ${textClass} hover:text-gray-500 rounded`}
                >
                  À propos de moi
                </Link>
              </li>
              <li
                className={`hover:scale-110 transition ease-in-out duration-300 ${hoverClass}`}
              >
                <Link
                  href="/Job"
                  className={`block py-2 px-6 ${textClass} hover:text-gray-500 rounded `}
                >
                  Jobs
                </Link>
              </li>
              <li
                className={`hover:scale-110 transition ease-in-out duration-300  `}
              >
                <Link
                  href="/Contact"
                  className={`block py-2 px-6 ${textClass} hover:text-gray-500 rounded `}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavLink;
