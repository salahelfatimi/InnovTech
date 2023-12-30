import Carousel from "./components/Home/carousel";
import DescriptionInnovtech from "./components/Home/descriptionInnovtech";
import Grid from "./components/Home/grid";

import Map from "./components/Home/map";
import Loading from "./components/loading";

import ButtonUp from "./components/buttonUp";
export default function Home() {
  return (
    <>
      <div className="flex relative z-10 flex-col gap-8 pt-6 lg:pt-[3.5rem]  ">
        <ButtonUp />
        <Loading />
        <div>
          <Carousel />
        </div>
        <div className=" container ">
          <DescriptionInnovtech />
        </div>
        <div className=" container">
          <Grid />
        </div>
        <div>
          <Map />
        </div>
        
      </div>
    </>
  );
}
