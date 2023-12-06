import Loading from "@/pages/components/loading";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AlertTriangle, ChevronDown, Link } from "react-feather";
import LinkA    from "next/link" ;
export default function Labortoures() {
  const router = useRouter();
  const [openItem, setOpenItem] = useState(null);
  const [establishment, setEstablishment] = useState([]);
  const { city, establishmentUrl } = router.query;
  const [establishmentName, setestablishmentName] = useState("");

   // Define an asynchronous function to fetch data
  useEffect(() => {
    const fetchData = async () => {
      if (city) {
        try {
          const response = await fetch(`/json/etablissmentInfo/${city}.json`);
          const data = await response.json();
          setEstablishment(data);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchData();
  }, [city]);

  // useEffect hook that sets 'establishmentName' when 'establishmentUrl' changes
  useEffect(() => {
    setestablishmentName(establishmentUrl);
  }, [establishmentUrl]);
  const toggleOpen = (id) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === id ? null : id));
  };

  return (
    <div className="container mt-10 py-12 relative z-10 ">
      <Loading />
      {establishment.length>0?(
      <div className="flex flex-col gap-8">
        {establishment?.map((ele, index) => (
          <div className="  " key={index}>
            <div>
              <div
                className={`flex justify-between items-center bg-[#ff9825] p-4   drop-shadow-2xl ${
                  openItem === ele.id || ele.etablissment === establishmentName
                    ? "rounded-t-3xl"
                    : "rounded-3xl"
                }`}
              >
                <span className="font-bold text-lg text-white">
                  {ele.etablissment}
                </span>
                <button
                  onClick={() => {
                    toggleOpen(ele.id), setestablishmentName("");
                  }}
                  className={`transition duration-700 text-white ${
                    openItem === ele.id ||
                    ele.etablissment === establishmentName
                      ? "rotate-0"
                      : "rotate-180"
                  }`}
                >
                  <ChevronDown size={30} className=" stroke-2" />
                </button>
              </div>
              <div
                className={` relative rounded-b-3xl   bg-[#FFFFFF] border-b-2 border-x-2 border-[#ff9825] dark:bg-[#1c1f24] p-4 drop-shadow-2xl  ${
                  openItem === ele.id || ele.etablissment === establishmentName
                    ? "block"
                    : "hidden"
                }`}
              >
                <div>
                  <h2 className="mb-4   text-[#ff9825] font-bold text-base md:text-lg">
                    Les Laboratoire impliqués :{" "}
                  </h2>
                  <div className=" pb-4 ml-8 space-y-4 text-gray-500   dark:text-gray-400">
                    {ele.laboratoire?.map((ele, index) => (
                      <LinkA
                        key={index}
                        href={`/laboratoireInfo/${ele.url}`}
                        className="hover:text-[#4FAAFF] flex gap-2  duration-700 font-semibold dark:hover:text-[#4FAAFF] dark:text-[#DFE0DF]"
                      >
                        - {ele.title}
                        <Link size={20} className="lg:block hidden" />
                      </LinkA>
                    ))}
                  </div>
                </div>

                <ol
                 className={`  ${
                  ele.equipes.length === 0 ? "hidden" : "block"
                } `}
                >
                  <h2 className={`mb-4 text-lg font-bold text-[#ff9825] `}>
                    Les équipes impliquées :{" "}
                  </h2>
                  <li>
                    <div className=" pb-4 ml-8 space-y-4 text-gray-500   dark:text-gray-400">
                      {ele.equipes?.map((ele, index) => (
                        <LinkA
                          key={index}
                          href={`/laboratoireInfo/${ele.url}`}
                          className="hover:text-[#4FAAFF] flex gap-2  duration-700 font-semibold dark:hover:text-[#4FAAFF] dark:text-[#DFE0DF]"
                        >
                          - {ele.title}
                          <Link size={20} className="lg:block hidden" />
                        </LinkA>
                      ))}
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        ))}
      </div>
      ):(
          <>
            <div className=" flex flex-col lg:flex-row items-center justify-center text-center  gap-2  uppercase text-2xl font-bold">
              <AlertTriangle className="text-red-500 animate-pulse" size={50} /> Nous ne disposons actuellement pas du <span className="text-red-500">&apos;establishment {city}&apos; </span>chez InnovTech.
            </div>
          </>
      )
      }
    </div>
  );
}
