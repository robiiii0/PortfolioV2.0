"use client";

import Link from "next/link";
import React, { useState } from "react";

const NavLink = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Robin©
          </span>
        </Link>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
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
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li className="w-full">
              <Link
                href="/Aboutme"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 w-full"
              >
                About Me
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/Job"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 w-full"
              >
                Jobs
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/Contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 w-full"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavLink;
