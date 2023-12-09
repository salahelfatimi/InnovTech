import Link from "next/link";
import { useEffect, useState } from "react";
import { Link2 } from "react-feather";
import Loading from "./components/loading";
export default function Etablissment() {
  const [etablissment, setEtablissment] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/json/etablissment.json");
        const data = await response.json();
        setEtablissment(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="relative z-10  pt-28">
        <Loading />
        <div className="flex flex-col -top-[3.6rem] gap-8 justify-between items-center  relative z-20 container">
          {etablissment.map((ele, index) => (
            <div
              key={index}
              className="  lg:w-[75%] w-auto flex  flex-col-reverse  odd:lg:flex-row   even:lg:flex-row-reverse items-center gap-2 dark:bg-[#1c1f24] rounded-xl border-8 border-white dark:border-[#1c1f24] drop-shadow-2xl  bg-white "
            >
              <div className="flex flex-col gap-8 lg:w-1/2 p-6 items-center  lg:items-start">
                <span className=" uppercase font-bold text-lg lg:text-xl lg:text-start text-center dark:text-[#fff] text-black">
                  {ele.title}
                </span>
                <div className="flex flex-col gap-6 items-center lg:items-start">
                  <span className="text-[#9DA4B2] lg:text-base text-sm   font-semibold">
                    Number d&apos;établissements :{" "}
                    <span className="text-[#ff9825] font-bold">
                      {ele["Number of etablissements"]}
                    </span>
                  </span>
                  <span className="text-[#9DA4B2] lg:text-base text-sm font-semibold">
                    Number d&apos;laboratoire impliqués :{" "}
                    <span className="text-[#ff9825] font-bold">
                      {ele["Number of laboratoire impliques "]}
                    </span>{" "}
                  </span>
                  <span className="text-[#9DA4B2] lg:text-base text-sm font-semibold">
                    Number d&apos;équipes impliquées :{" "}
                    <span className="text-[#ff9825] font-bold">
                      {ele["Number of equipes impliquees "]}
                    </span>
                  </span>
                </div>
                <Link href={`/etablissmentInfo/${ele.Url}`}>
                  <button className="bg-[#ff9825]  font-bold border-4 border-[#ff9825] hover:bg-[#ffffff] duration-700 hover:text-[#ff9825] dark:hover:text-[#fff]   dark:hover:bg-[#1c1f24]  text-white rounded-md  py-1 px-4  capitalize flex gap-2 items-center ">
                    {" "}
                    <span>Voir plus</span> <Link2 size={25} />
                  </button>
                </Link>
              </div>
              <div className="lg:w-1/2">
                <img
                  className="object-cover  w-[30rem] lg:w-auto rounded-t-xl  lg:rounded-xl  h-full lg:h-[22rem]  "
                  src={`/image/etablissment/${ele.image}`}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
