import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";
import { Loader } from "react-feather";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  

  return (
    <>
      <div className="bg-[#F4F7FC] dark:bg-[#272B34] flex flex-col h-screen justify-between">
        
        <Head>
          <title>InnovTECH</title>
        </Head>
        <div></div>
        <Navbar />
        <main className="pt-20 mb-auto bg-[#F4F7FC] dark:bg-[#272B34]">
          {children}
        </main>
        <div className=" bg-[#F4F7FC]  dark:bg-[#272B34]">
          <Footer />
        </div>
      </div>
    </>
  );
}
