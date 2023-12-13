
import { useTheme } from "next-themes";
import { useRouter } from 'next/router'
import { Codesandbox, Menu , X} from "react-feather";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Navbar(){
    const router = useRouter()
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
            <div id="top"  className="z-20  ">
                
                {/* pc Nav bar */}
                <div className="  md:block hidden">
               
                    
                    <div className="  bg-white dark:bg-[#1c1f24]   fixed py-1   border-b-4 border-[#ff9825]  top-0 right-0 left-0">
                        <div className="container flex items-center justify-between">
                            <div className="flex gap-4 items-center ">
                          
                            <img src="/image/logo/logoDark.gif" alt="logo" className="w-40 dark:block hidden " />
                                <img src="/image/logo/logo.gif" alt="logo" className="w-40 block dark:hidden " />
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                {itemsNav.map((ele, index) => (
                                <Link key={index} href={ele.href}>
                                    <div  className={` hover:text-[#ff9825]  dark:hover:text-[#ff9825] hover:duration-700 transition font-bold ${router.pathname==ele.href?"border-b-2 border-[#ff9825] text-[#ff9825]":"text-black dark:text-white"} `}>
                                        <span>{ele.title}</span>
                                    </div>
                                </Link>
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
                        <div className="      bg-white dark:bg-[#1C1F24]   fixed   border-b-4 border-[#ff9825]  top-0 right-0 left-0 ">
                        
                            <div className="container ">
                                <div className="flex px-2  items-center justify-between">
                                <div className="flex gap-4 items-center ">
                          
                                <img src="/image/logo/logoDark.gif" alt="logo" className="w-40 dark:block hidden " />
                                <img src="/image/logo/logo.gif" alt="logo" className="w-40 block dark:hidden " />
                                </div>
                                    <button onClick={()=>{setOpen(!open)}} className=" md:hidden block">
                                            <Menu size={30} className=" stroke-2"/>
                                    </button>
                                </div>
                                
                                <div className={`fixed   inset-0 flex items-center justify-center bg-white dark:bg-[#2d2e32] duration-700 transition  ${open==false?"translate-x-0":"translate-x-full"}`}>
                                            <button onClick={()=>{setOpen(true)}} className="absolute top-4 right-4 text-red-600 ">
                                                <X size={40}/>
                                                
                                            </button>
                                            <div className=" text-black dark:text-[#fff] flex flex-col items-center gap-12 text-2xl font-bold">
                                            {itemsNav.map((ele,index)=>(
                                                <Link key={index} className={` hover:text-[#ff9825] text-2xl dark:hover:text-[#ff9825] hover:duration-700 transition font-bold ${router.pathname==ele.href?"border-b-2 border-[#ff9825] text-[#ff9825]":"text-black dark:text-white"} `} href={ele.href}>
                                                    <button onClick={()=>{setOpen(!open)}} key={index} className=" " >
                                                        <span>{ele.title}</span>
                                                    </button>
                                                </Link>
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