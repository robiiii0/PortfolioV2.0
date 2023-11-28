import NavLink from "./NavLink/NavLink";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <div className="w-11/12 mx-auto mt-[5%] font-montserrat">
          <div className="space-y-2">
            <h1 className="text-8xl font-bold">Robin Chabert</h1>
            <h1 className="text-8xl">Web and software developer</h1>
          </div>
          <div className="w-5/12 mt-12">
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              commodi modi magni saepe officia placeat aspernatur nobis! Modi,
              soluta, similique doloribus sunt nihil vitae eius quo in incidunt,
              temporibus laudantium.
            </p>
          </div>
          <div>
            <button className="bg-black text-white px-4 py-2 rounded-lg mt-12">
              robindevpro1@gmail.com
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
