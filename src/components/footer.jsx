import { Facebook, Linkedin, Mail  } from "react-feather"
export default function Footer(){
    return(
        <>
            <div className=" relative py-16 text-white ">
               
                <img className=" absolute z-0 bottom-0 sm:block lg:hidden" src="/icon/wave-haikeiTablet.svg" alt="" />
                <img className=" absolute z-0 bottom-0 block sm:hidden" src="/icon/wave-haikeiPhone.svg" alt="" />

                <img className=" absolute z-0 bottom-0 lg:block  hidden" src="/icon/wave-haikei4k.svg" alt="" />

                <div className="  relative container flex flex-col items-center gap-6 lg:flex-row lg:justify-between ">
                    <span className=" font-bold text-xl  text-center md:text-start ">
                        Copyright &copy;  {new Date().getFullYear()} . All rights are reserved by InnovTech

                    </span>
                   
                    <spna className="flex gap-6 items-center ">
                        <Mail />
                        <Facebook/>
                        <Linkedin/> 
                        
                    </spna>

                </div>
               
            </div>
        </>
    )
}