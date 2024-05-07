import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import NavLink from "./NavLink/NavLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robin portfolio",
  description: "Everything about me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <html>
        <body>
          <div className="w-full">
            <nav className="w-11/12 mx-auto p-4">
              <div className="flex justify-between items-center">
                <NavLink title={true} link={"/"} className="cursor-pointer">
                  Robin©
                </NavLink>
                <div className="space-x-2">
                  <NavLink title={false} link={"/Aboutme"}>
                    About me,
                  </NavLink>

                  <NavLink title={false} link={"/Job"}>
                    Jobs
                  </NavLink>
                </div>
                <NavLink title={false} link={"/Contact"}>
                  Contact
                </NavLink>
              </div>
            </nav>
          </div>
          <div>{children}</div>
        </body>
      </html>
    </>
  );
}
