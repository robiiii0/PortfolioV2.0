import Image from "next/image";
import React from "react";

export default function Job() {
  return (
    <div className="w-full font-montserrat">
      <div className="w-11/12 mx-auto mt-12">
        <div className="space-y-2">
          <h1 className="text-8xl font-bold">SELECTED WORK</h1>
          <h1 className="text-8xl font-bold">(2018 — 2023)</h1>
        </div>
        <div className="mt-12">
          <p className="text-2xl mt-12 w-5/12">
            Have a look at some of the projects I’ve worked on. Clients vary
            from lifestyle to tech and design companies.
          </p>
        </div>
        <div className="mt-12 w-12/12 flex justify-between">
          <p className="text-2xl">Lorem ipsum dolor sit amet.</p>
          <p className="text-2xl">Lorem ipsum dolor sit amet.</p>
          <p className="text-2xl">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="flex justify-center mt-2">
          <Image
            alt=""
            width={1920}
            height={1080}
            src="https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-[60rem] rounded-xl "
            objectFit="cover"
          />
        </div>
        <p className="mt-56">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          molestias repellat unde. Aspernatur cumque architecto quas laborum?
          Qui voluptate tempora exercitationem facilis quo repellendus corporis
          facere nostrum amet soluta. Libero.
        </p>
      </div>
    </div>
  );
}
