import Carousel from "./components/Home/carousel";
import DescriptionInnovtech from "./components/Home/descriptionInnovtech";
import Grid from "./components/Home/grid";
import InfoBelkhayat from "./components/Home/infoBelkhayat";
import Map from "./components/Home/map";
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-16">
            <Carousel />
        <div className=" container ">
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
