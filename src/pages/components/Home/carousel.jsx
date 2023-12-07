import Link from "next/link"
import {ChevronLeft, ChevronRight} from "react-feather"
import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';

register();

export default function Carousel(){
    const swiperElRef = useRef(null);
    const  [data,setData]=useState([])

    // Fetch data from json file
    useEffect(()=>{
        const fetchData  = async () => {
            const response= await fetch("/json/carousel.json")
            const dataGet=  await response.json()
            setData(dataGet.slider )
        }
        fetchData()
        const swiperEl = document.querySelector('swiper-container');
        const params = {
            // array with CSS styles
            injectStyles: [`
                :host .swiper-button-next, :host .swiper-button-prev {
                    color: #ff9825;
                }
                :host .swiper-pagination-bullet-active {
                    background: #ff9825;
                }
            `],
        };
        Object.assign(swiperEl, params);
        swiperEl.initialize();
    },[])

    return(
        <swiper-container
            ref={swiperElRef}
            init="false"
            slides-per-view="1"
            navigation="true"
            pagination="true"
            loop={true}
            autoplay-delay={5000}
            autoplay={true}
        >
            {data.map((ele,index)=>(
                <swiper-slide key={index}>
                    <img className="w-full object-cover"   src={`/image/carousel/${ele.src}`} alt={ele.title} />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                    <div className=" absolute bottom-8 left-0 right-0 justify-center md:p-8 p-2 flex">
                        <div className="space-y-1 p-2 md:space-y-4 flex items-center flex-col">
                            <div  className="text-white md:text-4xl font-bold">
                                {ele.title}
                            </div>
                            <Link  href={`/etablissmentInfo/[city]/[establishment]`} as={`/etablissmentInfo/${ele.city}/${ele.title}`}>
                                <button className="bg-[#ff9825] font-bold border-4 border-[#ff9825] hover:bg-[#ffffff] hover:text-[#ff9825] dark:hover:text-[#fff] duration-700 dark:hover:bg-[#1c1f24]  text-white rounded-md py-1 lg:py-2 lg:px-10 capitalize px-8">
                                    Voir plus
                                </button>
                            </Link>
                        </div>
                    </div>
                </swiper-slide>
            ))}
        </swiper-container>
    )
}
