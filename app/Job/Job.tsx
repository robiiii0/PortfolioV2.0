import Image from "next/image";
import React from "react";
import { ListJobs, ObjList } from "./JobList";

function Card(props: { data: ObjList }) {
  return (
    <>
      <div className="p-4 rounded-xl shadow-md mt-12 bg-gray-100">
        <div className=" w-12/12 font-bold flex justify-between">
          <p className="text-2xl">{props.data.company}</p>
          <p className="text-2xl">{props.data.jobName}</p>
          <p className="text-2xl">
            {props.data.date.getDate()}/{props.data.date.getMonth() + 1}/
            {props.data.date.getFullYear()}
          </p>
        </div>
        <div className="flex justify-center mt-4 relative overflow-hidden">
          {props.data.path !== "" ? (
            <iframe
              className="rounded-2xl shadow-2xl transform-gpu hover:scale-105 transition-transform duration-300"
              src={props.data.path}
              style={{ width: "100%", height: "60rem", border: "none" }}
              title={`${props.data.company} Preview`}
            />
          ) : (
            <Image
              alt={props.data.alt || "Descriptive text about the image"}
              width={1920}
              height={1080}
              src={props.data.imgCover}
              className="w-full h-[60rem] rounded-xl mt-4 shadow-2xl cursor-pointer transform-gpu hover:scale-105 transition-transform duration-300"
              objectFit="cover"
            />
          )}
        </div>
        <p className="font-bold mt-8 text-xl">Description: </p>
        <p className="mt-2">{props.data.description}</p>
      </div>
    </>
  );
}

export default function Job() {
  return (
    <div className="w-full font-montserrat">
      <div className="w-11/12 mx-auto mt-12">
        <div className="space-y-2">
          <h1 className="text-8xl font-bold">SELECTED WORK</h1>
          <h1 className="text-8xl font-bold">(2020 — 2023)</h1>
        </div>
        <div className="mt-12">
          <p className="text-2xl mt-12 w-5/12">
            Have a look at some of the projects I&apos;ve worked on. Clients
            vary from lifestyle to tech and design companies.
          </p>
        </div>
        {ListJobs.map((job, index) => (
          <Card key={index} data={job} />
        ))}
      </div>
    </div>
  );
}
