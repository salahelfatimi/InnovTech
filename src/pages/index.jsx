import Carousel from "./components/Home/carousel";
import DescriptionInnovtech from "./components/Home/descriptionInnovtech";
import Grid from "./components/Home/grid";
import InfoBelkhayat from "./components/Home/infoBelkhayat";
import Map from "./components/Home/map";
export default function Home() {
  
  return (
    <>
      <div className="flex relative z-10 flex-col gap-20">
          <img className=' absolute z-0 -top-[3.6rem] hidden lg:block' src='/icon/waveSaction.svg' alt='' />
          <img className=" absolute z-0 -top-[3.6rem] sm:block lg:hidden" src="/icon/waveSactionTablet.svg" alt="" />
          <img className=" absolute z-0 -top-[3.6rem] block sm:hidden" src="/icon/waveSactionPhone.svg" alt="" />
          <div >
            <Carousel />
            </div>
          <div  className=" container ">
            <DescriptionInnovtech/>
          </div>
        <div className=" container">
            <Grid />
        </div>
        <div>
            <Map/>
        </div>
        <div>
            <InfoBelkhayat/>
        </div>
      </div>
    </>
  );
}
