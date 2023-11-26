import Carousel from "./components/carousel"
export default function Home(){
    return(
        <>
            <div className=" ">
                <Carousel />
                <div className=" container ">
                    <div className="flex flex-col items-center gap-4 py-8">
                        <span className="lg:text-4xl text-2xl text-[#3A9BE1] text-center  font-bold">Formation Doctorale InnovTech </span>
                        <span className="text-[#848789] lg:font-medium text-center lg:text-lg ">
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