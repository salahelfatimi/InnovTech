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
        <div className=" container  ">
            <div className="flex flex-col gap-8 justify-between items-center  ">
                {
                    etablissment.map((ele,index)=>(
                            <div key={index} className=" lg:w-[75%] flex  flex-col-reverse  odd:lg:flex-row   even:lg:flex-row-reverse items-center gap-2 dark:bg-[#1c1f24] rounded-2xl shadow-xl  bg-white ">
                                <div className="flex flex-col gap-8 lg:w-1/2 p-6 items-center  lg:items-start">
                                        <span className=" uppercase font-bold text-lg lg:text-xl lg:text-start text-center">{ele.title}</span>
                                    <div className="flex flex-col gap-6 items-center lg:items-start">
                                        <span className="text-[#9DA4B2] lg:text-base text-sm  font-semibold">Number d&apos;établissements : <span>{ele["Number of etablissements"]}</span></span>
                                        <span className="text-[#9DA4B2] lg:text-base text-sm font-semibold">Number d&apos;laboratoire impliqués : <span>{ele["Number of laboratoire impliques "]}</span> </span>
                                        <span className="text-[#9DA4B2] lg:text-base text-sm font-semibold">Number d&apos;équipes impliquées : <span>{ele["Number of equipes impliquees "]}</span></span>
                                    </div>
                                    <a href={`/etablissmentInfo/${ele.Url}`}><button className="bg-[#1A60A1] font-semibold border-2 border-[#1A60A1] hover:bg-[#ffffff] hover:text-[#1A60A1] dark:hover:text-[#fff]   dark:hover:bg-[#1c1f24]  text-white rounded-md  py-2 px-12 ">Voir plus ...</button></a>
                                </div>
                                <div className="lg:w-1/2">
                                    <img className="object-cover w-full rounded-t-xl  lg:rounded-2xl  h-full lg:h-[22rem]  " src={`/image/etablissment/${ele.image}`} alt="" />
                                </div>
                            </div>
                    ))
                }
            </div>
       </div>
       </> 
    )
}