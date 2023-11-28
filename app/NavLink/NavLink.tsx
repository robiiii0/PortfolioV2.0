"use client";

import Link from "next/link";
import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({
  link,
  title,
  children,
}: {
  link: string;
  title: boolean;
  children: React.ReactNode;
}) {
  let segment = useSelectedLayoutSegment();
  let active = link === `/${segment}`;
  return (
    <>
      <Link
        className={` ${active ? "underline" : ""} ${
          title ? "text-4xl font-bold" : "text-xl font-medium"
        } font-montserrat`}
        href={link}
      >
        {children}
      </Link>
    </>
  );
}
