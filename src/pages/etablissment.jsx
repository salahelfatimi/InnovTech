'use client'
import { useEffect, useState } from "react"

export default function Etablissment(){
    const [etablissment,setEtablissment]=useState([])
    useEffect(  ()  =>{
        const fetchData  = async () => {
            try {
                const response = await  fetch('/json/etablissment.json')
                const data= await  response.json()
                setEtablissment(data)
            }catch(err){
                console.log(err)
            }
    }
    fetchData()
    }
    
    ,[])
    return(
       <>
        <div className="relative z-10  pt-28">
            <img className=' absolute z-0 -top-[3.6rem] hidden lg:block' src='/icon/waveSaction.svg' alt='' />
            <img className=" absolute z-0 -top-[3.6rem] sm:block lg:hidden" src="/icon/waveSactionTablet.svg" alt="" />
            <img className=" absolute z-0 -top-[3.6rem] block sm:hidden" src="/icon/waveSactionPhone.svg" alt="" />
            <div className="flex flex-col -top-[3.6rem] gap-8 justify-between items-center  relative z-20 container">
                {
                    etablissment.map((ele,index)=>(
                            <div key={index} className="  lg:w-[75%] w-auto flex  flex-col-reverse  odd:lg:flex-row   even:lg:flex-row-reverse items-center gap-2 dark:bg-[#1c1f24] rounded-3xl border-8 border-white dark:border-[#1c1f24] drop-shadow-2xl  bg-white ">
                                <div className="flex flex-col gap-8 lg:w-1/2 p-6 items-center  lg:items-start">
                                        <span className=" uppercase font-bold text-lg lg:text-xl lg:text-start text-center">{ele.title}</span>
                                    <div className="flex flex-col gap-6 items-center lg:items-start">
                                        <span className="text-[#9DA4B2] lg:text-base text-sm   font-semibold">Number d&apos;établissements : <span className="text-[#0063f7] font-bold">{ele["Number of etablissements"]}</span></span>
                                        <span className="text-[#9DA4B2] lg:text-base text-sm font-semibold">Number d&apos;laboratoire impliqués : <span className="text-[#0063f7] font-bold">{ele["Number of laboratoire impliques "]}</span> </span>
                                        <span className="text-[#9DA4B2] lg:text-base text-sm font-semibold">Number d&apos;équipes impliquées : <span className="text-[#0063f7] font-bold">{ele["Number of equipes impliquees "]}</span></span>
                                    </div>
                                    <a href={`/etablissmentInfo/${ele.Url}`}><button className="bg-[#0063f7] font-bold border-4 border-[#0063f7] hover:bg-[#ffffff] duration-700 hover:text-[#0063f7] dark:hover:text-[#fff]   dark:hover:bg-[#1c1f24]  text-white rounded-3xl  py-2 px-12 ">Voir plus ...</button></a>
                                </div>
                                <div className="lg:w-1/2">
                                    <img className="object-cover w-[30rem] lg:w-auto rounded-t-2xl  lg:rounded-2xl  h-full lg:h-[22rem]  " src={`/image/etablissment/${ele.image}`} alt="" />
                                </div>
                            </div>
                    ))
                }
            </div>
       </div>
       </> 
    )
}