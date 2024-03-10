'use client'
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { usePathname } from 'next/navigation'
import { Moon, Phone, Triangle } from "react-feather";


export default function Nav() {
  const { locale, locales, push } = useRouter();
  const pathname = usePathname()
  const [showLanguage, setShowLanguage] = useState(false);
  
  const handleClick=(lan)=>{
    push({pathname}, undefined ,{ locale:lan})
  }

  return (
    <>
      <div className=" container pt-4 flex justify-between items-center ">
        <div>
          <img
            src="image/logo/Explorem_logo.png"
            className=" w-28"
            alt="Explorem"
          />
        </div>
        <div className=" flex gap-6 items-center">
          <Link href="/" className=" capitalize font-semibold">
            home

          </Link>
          <Link href="#" className=" capitalize font-semibold">
            employe
          </Link>
          <Link href="#" className=" capitalize font-semibold">
            form
          </Link>
          <Link href="#" className=" capitalize font-semibold">
            contact
          </Link>
          <Link href="/aboutUs"  locale={locale} className=" capitalize font-semibold">
            about
          </Link>
          <a
            className="flex items-center  gap-2 bg-[#0149A6] py-2 px-2 text-white rounded-full font-mediumt"
            href="tel:+212602314804"
          >
            <Phone size={20} />
            (+212) 6 02 31 48 04
          </a>
          <div className="relative">
            <div
              className="flex  items-center gap-2 border-[#0149A6] border-4 py-1 px-2 rounded-full cursor-pointer"
              onClick={() => {
                setShowLanguage(!showLanguage)
              }}
            >
              <img
                src={`/image/flag/${locale}.png`}
                className="h-4 w-5"
                alt=""
              />
              <span className="font-semibold capitalize">{locale}</span>
              <Triangle
                size={13}
                className=" rotate-180 fill-[#0149A6] stroke-none "
              />
            </div>
            <div className={` absolute  bg-[#0149A6] p-3 rounded-md   right-0 left-0 ${ showLanguage===false?" hidden ":"block" }  `}>
              {locales.map((lan, index) => (
                <div onClick={() => { setShowLanguage(!showLanguage),handleClick(lan)}} key={index} className={`flex items-center hover:bg-white text-white hover:text-black rounded-md p-1 gap-2 `}>
                  <img
                    src={`/image/flag/${lan}.png`}
                    className="h-4 w-5"
                    alt=""
                  />
                  <span className=" capitalize font-semibold ">{lan}</span>
                </div>
              ))}
            </div>
          </div>
          <button className="bg-[#0149A6] rounded-full p-1">
            <Moon size={25} className="  stroke-white   " />
          </button>
        </div>
      </div>
    </>
  );
}

