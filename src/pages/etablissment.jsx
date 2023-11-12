'use client'
import {etablissment} from "@/json/Etablissment"
export default function Etablissment(){
    return(
       <>
        <div className="  ">
            <div className="flex flex-col gap-8 justify-between items-center  ">
                {
                    etablissment.map((ele,index)=>(
                        
                            <div key={index} className=" lg:w-[75%] flex flex-col-reverse  lg:flex-row items-center gap-2 dark:bg-[#1c1f24] rounded-xl shadow-2xl  bg-white ">
                                <div className="flex flex-col gap-8 lg:w-1/2 p-6 items-center  lg:items-start">
                                        <span className=" uppercase font-bold text-lg lg:text-xl lg:text-start text-center">{ele.title}</span>
                                    <div className="flex flex-col gap-6 items-center lg:items-start">
                                        <span className="text-[#9DA4B2] lg:text-base text-sm  font-semibold">Number d&apos;établissements : <span>{ele["Number of etablissements"]}</span></span>
                                        <span className="text-[#9DA4B2] lg:text-base text-sm font-semibold">Number d&apos;laboratoire impliqués : <span>{ele["Number of laboratoire impliques "]}</span> </span>
                                        <span className="text-[#9DA4B2] lg:text-base text-sm font-semibold">Number d&apos;équipes impliquées : <span>{ele["Number of equipes impliquees "]}</span></span>
                                    </div>
                                    <button className="bg-[#1A60A1] font-semibold border-2 border-[#1A60A1] hover:bg-[#ffffff] hover:text-[#1A60A1] dark:hover:text-[#fff]   dark:hover:bg-[#1c1f24]  text-white rounded-md  py-2 px-12 ">See More ...</button>
                                </div>
                                <div className="lg:w-1/2">
                                    <img className="object-cover w-full rounded-t-xl lg:rounded-t-none rounded-r-none lg:rounded-r-xl h-full lg:h-[22rem]  " src={ele.image} alt="" />
                                </div>
                            </div>
                        
                    ))
                }
            </div>
       </div>
       </> 
    )
}