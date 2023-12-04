import { Facebook, Linkedin, Mail } from "react-feather";

export default function InfoBelkhayat(){
    return(
        <>
            <div className=" container flex flex-col lg:flex-row items-center justify-center gap-12 ">
                <img className=" rounded-3xl md:w-[70%] lg:w-[40%]  drop-shadow-2xl " src="/image/home/Belkhayat.png" alt="" />
                <div className="flex flex-col  lg:items-start items-center text-center lg:text-start gap-4">
                    <span className=" text-2xl lg:text-3xl font-bold text-[#ff9825] ">M. Belkhayat Driss</span>
                    <span className=" text-lg lg:text-xl font-medium dark:text-[#DFE0DF]">Le directeur de la cité de l&apos;innovation de Marrakech</span>
                    <div className="flex gap-4 items-center">
                        <span>
                            <Linkedin size={35} className="bg-[#0a66c2]  shadow-md rounded stroke-slate-50 p-1"/>
                        </span>

                        <span>
                            <Facebook size={35} className="bg-[#0866ff] fill-white shadow-md rounded-full stroke-1 stroke-slate-50 p-1"/>
                        </span>
                        <span>
                            <Mail size={35} className=" shadow-md rounded fill-white-600 stroke-2 stroke-red-500 p-1"/>
                        </span>
                    </div>


                </div>
            </div>
        </>
    )
}