'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function Navbar(){
    const { theme, setTheme } = useTheme();
    const[open,setOpen]=useState(true)
    const [mounted, setMointed] = useState(false);
    const itemsNav=[
        {title:"Accueil",href:"/"},
        // {title:"laboratoire",href:"/laboratoire"},
        {title:"Etablissment",href:"/etablissment"},
        {title:"Contact",href:"/contact"},
        {title:"à propos",href:"/aboute"}
    ]
  
    useEffect(() => {
        setMointed(true);
      }, []);
      if (!mounted) {
        return null;
      }
    
    return(
        <>
            <div className=" z-40">
                {/* pc Nav bar */}
                <div className="  md:block hidden">
               
                
                    <div className="  bg-white dark:bg-[#1C1F24] rounded-full pt-4 fixed py-4 border-4   border-[#0066ff] shadow-2xl top-2 right-4 left-4">
                        <div className="container flex items-center justify-between">
                            <div>
                                <span className=" font-bold text-2xl">Innov<span className="text-[#0066ff]">TECH</span></span>
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                {itemsNav.map((ele, index) => (
                                <a key={index} href={ele.href}>
                                    <div  className="text-black dark:text-white hover:text-[#0063f7] dark:hover:text-[#0063f7] hover:duration-700 transition font-semibold">
                                        <span>{ele.title}</span>
                                    </div>
                                </a>
                                ))}
                                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="focus:outline-none">
                                <svg className={`transition duration-700 ${theme === "dark" ? "rotate-180" : "rotate-0"}`} width="30px" height="30px" viewBox="0 0 24 24" fill={theme === "light" ? "#000" : "#fff"} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill={theme === "light" ? "#000" : "#fff"} />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill={theme === "light" ? "#000" : "#fff"} />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* mobile Nav bar  */}

                    <div className="md:hidden  block">
                        <div className="      bg-white dark:bg-[#1C1F24] rounded-full pt-4 fixed py-4 border-4 border-collapse border-[#0066ff]  shadow-3xl top-2 right-2 left-2 ">
                        
                            <div className="container ">
                                <div className="flex px-2  items-center justify-between">
                                    <div>
                                    <span className=" font-bold text-xl">Innov<span className="text-[#0066ff]">TECH</span></span>
                                    </div>
                                    <button onClick={()=>{setOpen(!open)}} className=" md:hidden block">
                                        <svg fill={theme === "light" ? "#000" : "#fff"} width="30px" height="30px" viewBox="0 -2 28 28" xmlns="http://www.w3.org/2000/svg"><path d="m2.61 0h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/><path d="m2.61 9.39h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/><path d="m2.61 18.781h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/></svg>
                                    </button>
                                </div>
                                
                                <div className={`fixed   inset-0 flex items-center justify-center bg-white dark:bg-[#2d2e32] duration-700 transition  ${open==false?"translate-x-0":"translate-x-full"}`}>
                                            <button onClick={()=>{setOpen(true)}} className="absolute top-4 right-4 text-red-400 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                            <div className=" text-black dark:text-[#fff] flex flex-col items-center gap-12 text-2xl font-bold">
                                            {itemsNav.map((ele,index)=>(
                                                <a key={index} className=" hover:text-[#1A60A1] transition hover:dark:text-[#1A60A1] duration-700" href={ele.href}>
                                                    <button onClick={()=>{setOpen(!open)}} key={index} className=" " >
                                                        <span>{ele.title}</span>
                                                    </button>
                                                </a>
                                            ))}
                                            <button onClick={()=>{ setTheme(theme === "dark" ? "light" : "dark"),setOpen(!open)}}>
                                                <svg  className={`transition duration-700  ${theme==="dark"?"rotate-180":"rotate-0"}`}  width="50px" height="50px" viewBox="0 0 24 24" fill={theme === "light" ? "#000" : "#fff"} xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill={theme === "light" ? "#000" : "#fff"}/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill={theme === "light" ? "#000" : "#fff"}/>
                                                </svg>
                                            </button>
                                                   
                            
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}