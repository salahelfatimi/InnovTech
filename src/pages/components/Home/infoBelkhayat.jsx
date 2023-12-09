import { Facebook, Linkedin, Mail } from "react-feather";

export default function InfoBelkhayat(){
    return(
        <>
            <div className=" container flex flex-col lg:flex-row items-center justify-center gap-8 ">
                <img className=" rounded-xl md:w-[70%] lg:w-[40%]   " src="/image/home/Belkhayat.png" alt="" />
                <div className="flex flex-col  lg:items-start items-center text-center lg:text-start gap-4">
                    <span className=" text-2xl lg:text-3xl font-bold text-[#ff9825] ">M. Belkhayat Driss</span>
                    <span className=" text-lg  font-medium dark:text-[#DFE0DF]">Le directeur de la cité de l&apos;innovation de Marrakech</span>
                    <div className="flex gap-4 items-center">
                        <Facebook size={32} className="stroke-[#0866ff] stroke-2 p-1"/>
                        <Linkedin size={32} className="stroke-[#0a66c2] p-1"/>
                        <Mail size={32} className="stroke-2 stroke-red-500 p-1"/>
                    </div>


                </div>
            </div>
        </>
    )
}