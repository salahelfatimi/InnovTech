import { useEffect, useState } from "react"


export default function Home(){
    const  [data,setData]=useState([])
    const [imageId, setIamgeId] = useState(1);
    const [sliderImage, setSliderImage] = useState({});
   
    

    useEffect(()=>{
        const fetchData  = async () => {
            const response= await fetch("/json/home/index.json")
            const dataGet=  await response.json()
            setData(dataGet.slider )
            
        }
        fetchData()
    },[])
    useEffect(() => {
        const image =  data.find((Image) => Image.id === imageId);
        setSliderImage(image);
        
        const interval = setInterval(() => {
          const nextImageId = imageId === 6 ? 1 : imageId + 1;
          setIamgeId(nextImageId);
        }, 5000);
    
        return () => {
          clearInterval(interval);
        };
      }, [imageId,data]);
     
    return(
        <>
            <div className=" ">
                <div className=" container">
                    <div className="relative ">
                        <div className="  w-full  flex items-center " >
                            <img src={`/image/Home/${sliderImage?.src}`} className=" rounded-xl  w-auto  h-auto duration-700  transition shadow-2xl   brightness-100" alt="" />
                            <div className=" absolute bottom-0 left-0   text-white p-6 ">
                                <div className="flex flex-col gap-2"> 
                                    <h3 className=" capitalize font-extrabold text-lg md:text-4xl  lg:text-6xl">
                                        {sliderImage?.title}
                                    </h3>
                                    <a href=""><button className="bg-[#1A60A1] font-semibold border-2 border-[#1A60A1]     text-white rounded-md py-1 lg:py-2 px-4 lg:px-10  capitalize ">voir plus</button></a>
                                </div>
                            </div>
                        </div>
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
                    <img src="/image/Home/Belkhayat.png" className=" rounded-full h-72" alt="" />
                </div>
                </div>
            </div>
        </>
    )
}