import { useEffect, useState } from "react"
import {ChevronLeft, ChevronRight} from "react-feather"
export default function Home(){
    const  [data,setData]=useState([])
    const [curr ,setCurr]=useState(0)
    useEffect(()=>{
        const fetchData  = async () => {
            const response= await fetch("/json/home/index.json")
            const dataGet=  await response.json()
            setData(dataGet.slider )
            
        }
        fetchData()
    },[])
    const prev=()=> setCurr((curr)=>(curr ===0?data.length-1:curr-1))
    const next=()=> setCurr((curr)=>(curr ===data.length-1?0:curr+1))
    useEffect(()=>{
        const slideInterval=setInterval(next,3000)
        return ()=>clearInterval(slideInterval)
    })
     
    return(
        <>
            <div className=" ">
                <div className=" flex items-center justify-center container">

                        <div className=" max-w-[1100px] max-h-[700px] overflow-hidden rounded-2xl drop-shadow-2xl saturate-150  relative">
                            <div style={{ transform:`translateX(-${curr *100}%)` }} className="flex transition-transform ease-out duration-500 ">
                                {data.map((ele,index)=>(
                                   
                                        <img key={index}   src={`/image/slider/${ele.src}`} alt={ele.title} />
                                    
                                ))}
                            </div>
                            <div className=" absolute inset-0 flex items-center justify-between p-4 z-30">
                                <button onClick={prev} className=" p-1 bg-white/80 hover:bg-white duration-500 rounded-full shadow  text-gray-800 ">
                                    <ChevronLeft size={30}/>
                                </button>
                                <button onClick={next} className=" p-1 bg-white/80 z-30 hover:bg-white duration-500 rounded-full shadow  text-gray-800 ">
                                    <ChevronRight size={30}/>
                                </button>
                            </div>
                            <div className=" absolute bottom-0 left-0  md:p-8 p-2 backdrop-blur-xl rounded-tr-lg ">
                                <div className="flex justify-start gap-2">
                                    {
                                        data.map((ele,index)=>(
                                            <div key={index} className={` space-y-1 md:space-y-4  ${curr===index?"block":" hidden"}`}>
                                                <div  className="text-white md:text-4xl font-bold">
                                                        {ele.title}
                                                </div>
                                                <button className=" md:text-2xl font-medium md:font-semibold text-white bg-[#1A60A1] md:px-4 rounded-md py-1 px-2 lg:py-2 text-center">
                                                    See more ..
                                                </button>
                                            </div>
                                        ))
                                    }

                                </div>

                            </div>
                            {/* <div className=" absolute bottom-4 right-0 left-0">
                                <div className="flex items-center justify-center gap-2">
                                    {
                                        data.map((ele,index)=>(
                                            <div key={index} className={` transition-all w-3 h-3 bg-white rounded-full ${curr===index?"p-1":" bg-opacity-50"}`}>

                                            </div>
                                        ))
                                    }

                                </div>

                            </div> */}
                        </div>
                       
                   
                </div>
                <div className=" container ">
                    <div className="flex flex-col items-center gap-12 py-12">
                        <span className="lg:text-4xl text-2xl text-[#3A9BE1]  font-bold">Formation Doctorale InnovTech </span>
                        <span className="text-[#848789] font-medium text-center lg:text-lg leading-10">
                        Le projet InnovTech vise à regrouper et collaborer les laboratoires de l&apos;UCA pour répondre à ses orientations stratégiques.
                        Cette mutualisation crée une synergie entre chercheurs, indépendamment de leur affiliation.
                        Cette approche met en avant des axes de recherche grâce à des équipes de taille compétitive nationale et internationale.
                        InnovTech réunit 14 laboratoires et 5 équipes de recherche de 5 établissements de l&apos;UCA,
                            répartis dans 3 villes (Marrakech, Safi, Essaouira).
                        Leur complémentarité vise à établir un pôle de référence en innovation technologique, à l&apos;échelle nationale et internationale.
                        </span>
                    </div>
                    
                </div>
                <div className="py-12">
                    <iframe   src="https://www.google.com/maps/d/u/0/embed?mid=1EEBYDK-DPQ05E25i4TjANJyBoJ9qd-8&ehbc=2E312F&noprof=1" width="100%" height="600"></iframe>                <div className="py-12 container">
                </div>
                <div>
                    <img src="/image/slider/Belkhayat.png" className=" rounded-full h-72" alt="" />
                </div>
                </div>
            </div>
        </>
    )
}