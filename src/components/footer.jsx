import { Facebook, Linkedin, Mail  } from "react-feather"
export default function Footer(){
    return(
        <>
            <div className=" relative py-8 text-white bg-black/80">
                <div className="  relative container flex flex-col items-center gap-6 lg:flex-row lg:justify-between ">
                    <span className=" font-bold text-center md:text-start ">
                        Copyright &copy;  {new Date().getFullYear()} . All rights are reserved by <span className="text-[#ff9825]">InnovTech</span>
                    </span>
                    <span className="flex gap-6 items-center ">
                        <Facebook/>
                        <Linkedin/>
                        <Mail />
                    </span>

                </div>
            </div>
        </>
    )
}
