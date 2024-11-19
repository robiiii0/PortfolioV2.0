import React from "react";
import Job from "./Job";
import Footer from "../components/Footer";
import NavLink from "../NavLink/NavLink";

export default function page() {
  return (
    <div className="w-full ">
      <Job />
      <Footer color="black" />
    </div>
  );
}
