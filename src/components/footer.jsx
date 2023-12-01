import { Facebook, Linkedin, Mail  } from "react-feather"
export default function Footer(){
    return(
        <>
            <div className="relative py-16 text-white ">
                <img className="   absolute z-0 bottom-0" src="/icon/wave-haikei.svg" alt="" />
                <div className=" z-10 relative container flex flex-col items-center gap-6 lg:flex-row lg:justify-between ">
                    <span className=" font-bold text-xl text-center md:text-start ">
                        Copyright &copy;  {new Date().getFullYear()} . All rights are reserved by InnovTech

                    </span>
                    <spna className="flex gap-4">
                        <Mail/>
                        <Facebook/>
                        <Linkedin/> 
                    </spna>

                </div>
               
            </div>
        </>
    )
}