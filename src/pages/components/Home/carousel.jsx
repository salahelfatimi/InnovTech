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
        const slideInterval=setInterval(next,3000)
        return ()=>clearInterval(slideInterval)
    },[curr])
    return(
        <>
            <div className=" flex items-center justify-center container">

                <div className=" max-w-[1100px] max-h-[700px] overflow-hidden rounded-2xl shadow-lg  saturate-150  relative">
                    <div style={{ transform:`translateX(-${curr *100}%)` }} className="flex transition-transform ease-out duration-700 ">
                        {data.map((ele,index)=>(
                        
                                <img key={index}   src={`/image/carousel/${ele.src}`} alt={ele.title} />
                            
                        ))}
                    </div>
                    <div className=" absolute inset-0 flex items-center justify-between p-4 ">
                        <button onClick={prev} className=" p-1 bg-white/80 hover:bg-white duration-500 rounded-full shadow  text-gray-800 ">
                            <ChevronLeft size={30}/>
                        </button>
                        <button onClick={next} className=" p-1 bg-white/80 z-30 hover:bg-white duration-500 rounded-full shadow  text-gray-800 ">
                            <ChevronRight size={30}/>
                        </button>
                    </div>
                    <div className=" absolute bottom-3 left-0 right-0  justify-center md:p-8 p-2 flex   rounded-tr-lg ">
                        <div className="flex justify-center  items-center gap-2">
                            {
                                data.map((ele,index)=>(
                                    <div key={index} className={` space-y-1 backdrop-blur-sm p-2 rounded-xl md:space-y-4 flex items-center  flex-col  ${curr===index?"block":" hidden"}`}>
                                        <div  className="text-white md:text-4xl font-bold">
                                                {ele.title}
                                        </div>
                                        <a href={`/etablissmentInfo/${ele.city}`}>
                                            <button className=" md:text-xl font-medium md:font-semibold text-white bg-[#1A60A1] md:px-4 rounded-lg py-1 px-2 lg:py-2 text-center">
                                                Voir plus ...
                                            </button>
                                        </a>
                                    </div>
                                ))
                            }

                        </div>

                    </div>
                    <div className=" absolute bottom-3 right-0 left-0">
                        <div className="flex items-center justify-center gap-2">
                            {
                                data.map((ele,index)=>(
                                    <div key={index} className={` transition-all w-3 md:w-6 md:h-6 h-3 border-white  border-b-4 ${curr===index?"p-1":" border-opacity-50"}`}>

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