import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Layout({ children }) {
  const [show,setShow]=useState(false)
    
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setShow(true);
    }, 5000);

    // Clear the interval after 30 seconds
    setTimeout(() => {
      clearInterval(slideInterval);
      setShow(true);
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(slideInterval);
  }, []);
   
   
  return (
    <>
      <div className='bg-[#F4F7FC] dark:bg-[#272B34] flex flex-col h-screen justify-between'>
      <div className={`fixed  inset-0 flex items-center justify-center bg-white dark:bg-[#2d2e32] duration-1000 transition ${show==false?"block z-50 ":" z-0 dark:bg-[#2d2e32]/0 bg-white/0"} `}>
      <span className={`font-extrabold text-4xl ${show==false?"block":" hidden"}`}>Innov<span className="text-[#0066ff]">TECH</span></span>
      </div>
      <Head>
        <title>InnovTech</title>
      </Head >
        <div>
          
        </div>
        <Navbar />
        <main  className='py-14 mb-auto bg-[#F4F7FC] dark:bg-[#272B34]   '>
         

          {children}</main>
        <div  className=" bg-[#F4F7FC]  dark:bg-[#272B34]">
          <Footer/>

        </div>
      </div>
    </>
  )
}