'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function Navbar(){
    const { theme, setTheme } = useTheme();
    const[open,setOpen]=useState(true)
    const [mounted, setMointed] = useState(false);
    const itemsNav=[
        {title:"Accueil",href:"/"},
        {title:"Labortoures",href:"/labortoures"},
        {title:"Etablissment",href:"/etablissment"},
        {title:"Contact",href:"/contact"},
        {title:"Aboute",href:"/aboute"}
    ]
  
    useEffect(() => {
        setMointed(true);
      }, []);
      if (!mounted) {
        return null;
      }
    
    return(
        <>
            <div className="">
                {/* pc Nav bar */}
                <div className="md:block hidden">
                    <div className="bg-white dark:bg-[#1C1F24] fixed py-4 w-full top-0 left-0">
                        <div className="container flex items-center justify-between">
                            <div>
                                <span>logo</span>
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                {itemsNav.map((ele, index) => (
                                <div key={index} className="text-black dark:text-white hover:text-[#1A60A1] hover:duration-700 transition font-semibold">
                                    <a href={ele.href}><span>{ele.title}</span></a>
                                </div>
                                ))}
                                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="focus:outline-none">
                                <svg className={`transition duration-700 ${theme === "dark" ? "rotate-180" : "rotate-0"}`} width="30px" height="30px" viewBox="0 0 24 24" fill={theme === "dark" ? "#fff" : "#000"} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill={theme === "dark" ? "#fff" : "#000"} />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill={theme === "dark" ? "#fff" : "#000"} />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* mobile Nav bar  */}

                    <div className="md:hidden  block">
                        <div className="   bg-white dark:bg-[#1C1F24]   fixed py-4  w-full top-0 left-0  ">
                            <div className="container">
                                <div className="flex   items-center justify-between">
                                    <div>
                                        <span>logo</span>
                                    </div>
                                    <div onClick={()=>{setOpen(!open)}} className=" md:hidden block">
                                        <svg fill={`${theme==="dark"?"#fff":"#000"}`} width="30px" height="30px" viewBox="0 -2 28 28" xmlns="http://www.w3.org/2000/svg"><path d="m2.61 0h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/><path d="m2.61 9.39h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/><path d="m2.61 18.781h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"/></svg>
                                    </div>
                                </div>
                                <div className={`flex flex-col items-center gap-8 pt-8 duration-700 transition ${open==true?" hidden":" block"}`}>
                                    {itemsNav.map((ele,index)=>(
                                        <div onClick={()=>{setOpen(!open)}} key={index} className=" text-black hover:bg-[#1A60A1] w-full text-center py-2 rounded hover:text-white dark:text-white hover:text-[#1A60A1]b hover:duration-700  transition   font-semibold" >
                                            <a href={ele.href}><span>{ele.title}</span></a>
                                        </div>
                                    ))}
                                    <button onClick={()=> setTheme(theme === "dark" ? "light" : "dark")}>
                                        <svg  className={`transition duration-700  ${theme==="dark"?"rotate-180":"rotate-0"}`}  width="30px" height="30px" viewBox="0 0 24 24" fill={`${theme==="dark"?"#fff":"#000"}`} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill={`${theme==="dark"?"#fff":"#000"}`}/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill={`${theme==="dark"?"#fff":"#000"}`}/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}