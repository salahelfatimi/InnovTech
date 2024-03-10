import Link from "next/link"
import { useEffect, useState } from "react"
import {ChevronLeft, ChevronRight} from "react-feather"
export default function Carousel(){
    const  [data,setData]=useState([])
    const [curr ,setCurr]=useState(0)

    // Fetch data from json file 
    useEffect(()=>{
        const fetchData  = async () => {
            const response= await fetch("/json/carousel.json")
            const dataGet=  await response.json()
            setData(dataGet.slider )
            
        }
        fetchData()
    },[])
    // Make photo change
    const prev=()=> setCurr((curr)=>(curr ===0?data.length-1:curr-1))
    const next=()=> setCurr((curr)=>(curr ===data.length-1?0:curr+1))

    // make photo change auto
    useEffect(()=>{
        const slideInterval=setInterval(next,10000)
        return ()=>clearInterval(slideInterval)
    },[curr])
    return(
        <>
            <div className="  flex items-center justify-center lg:container">
            
          
                <div className=" max-w-[1100px] max-h-[700px] overflow-hidden  lg:rounded-md        relative">
                    <div style={{ transform:`translateX(-${curr *100}%)` }} className="flex transition-transform ease-out duration-700 ">
                        {data.map((ele,index)=>(
                        
                                <img key={index} className=" brightness-75   w-full lg:rounded-md"   src={`/image/carousel/${ele.src}`} alt={ele.title} />
                            
                        ))}
                    </div>
                    <div className=" absolute inset-0 flex items-center justify-between p-4 ">
                        <button onClick={prev} className=" p-1  text-[#ff9825] duration-500 rounded-full    ">
                            <ChevronLeft size={50}/>
                        </button>
                        <button onClick={next} className=" p-1  text-[#ff9825] z-30  duration-500 rounded-full    ">
                            <ChevronRight size={50}/>
                        </button>
                    </div>
                    <div className=" absolute bottom-3 left-0 right-0  justify-center md:p-8 p-2 flex   rounded-tr-lg ">
                        <div className="flex justify-center  items-center gap-2">
                            {
                                data.map((ele,index)=>(
                                    <div key={index} className={` space-y-1 bg-[] p-2 rounded-xl md:space-y-4 flex items-center  flex-col  ${curr===index?"block":" hidden"}`}>
                                        <div  className="text-white md:text-4xl font-bold">
                                                {ele.title}
                                        </div>
                                        <Link  href={`/etablissmentInfo/[city]/[establishment]`} as={`/etablissmentInfo/${ele.city}/${ele.title}`}>
                                            <button className="bg-[#ff9825]  font-semibold text-sm lg:text-base border-2 border-[#ff9825] hover:bg-[#ffffff] hover:text-[#ff9825] dark:hover:text-[#fff] duration-700   dark:hover:bg-[#1c1f24]  text-white rounded-md   py-1  px-3 capitalize  ">
                                                Voir plus ...
                                            </button>
                                        </Link>
                                    </div>
                                ))
                            }

                        </div>

                    </div>
                    <div className=" absolute bottom-3 right-0 left-0">
                        <div className="flex items-center justify-center gap-2">
                            {
                                data.map((ele,index)=>(
                                    <div key={index} className={` transition-all w-2 md:w-3 md:h-3 h-2 bg-white rounded-full   ${curr===index?"p-1":" bg-opacity-50"}`}>

                                    </div>
                                ))
                            }

                        </div>

                    </div>
                </div>


            </div>
        
        </>
    )
}