import React from "react";
import Job from "./Job";
import Footer from "../components/Footer";
import NavLink from "../NavLink/NavLink";

export default function page() {
  return (
    <div className="w-full bg-[#1f2020]">
      <div className="w-10/12 mx-auto pt-4">
        <NavLink colorScheme="black" />
      </div>
      <Job />
      <Footer color="black" />
    </div>
  );
}
