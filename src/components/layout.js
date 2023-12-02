import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setShow(true);
    }, 2000);

    // Clear the interval after 30 seconds
    setTimeout(() => {
      clearInterval(slideInterval);
      setShow(true);
    }, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <div className="bg-[#F4F7FC] dark:bg-[#272B34] flex flex-col h-screen justify-between">
        <div
          className={`fixed  inset-0 flex items-center justify-center bg-white dark:bg-[#2d2e32] duration-1000 transition z-50  ${
            show == false ? "translate-x-0" : "-translate-y-full"
          } `}
        >
          <span className={`font-extrabold text-4xl `}>
            Innov<span className="text-[#0066ff]">TECH</span>
          </span>
        </div>
        <Head>
          <title>InnovTech</title>
        </Head>
        <div></div>
        <Navbar />
        <main className="py-14 mb-auto bg-[#F4F7FC] dark:bg-[#272B34]   ">
          {children}
        </main>
        <div className=" bg-[#F4F7FC]  dark:bg-[#272B34]">
          <Footer />
        </div>
      </div>
    </>
  );
}
