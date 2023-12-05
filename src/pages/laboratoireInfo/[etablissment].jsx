import { useRouter } from "next/router";
import Loading from "../components/loading";
import { useEffect, useState } from "react";
import { Mail, User } from "react-feather";
export default function LaboratoireInfo() {
  const router = useRouter();
  const [etablissmentInfo, setEtablissmentInfo] = useState([
    {
      name: "",
      responsables: [],
      doctorants: [],
    },
  ]);
  const etablissment = router.query.etablissment;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/json/laboratoireInfo/laboratoire.json`);
      const data = await response.json();
      const find = await data.find((ele) => ele.name === etablissment);
      if (find) {
        const { doctorants, responsables, name } = find;
        setEtablissmentInfo([
          {
            name: name,
            responsables: responsables,
            doctorants: doctorants,
          },
        ]);
      }
    };
    fetchData();
  }, [etablissment]);
  const condition=etablissmentInfo[0]?.responsables && etablissmentInfo[0]?.responsables[0]?.directeur 
  return (
    <>
      <div className="container flex flex-col gap-8 mt-10 py-12 relative z-10 ">
        <Loading />
        <div className="flex flex-col ">
          <span className="lg:text-4xl text-xl  font-bold bg-[#ff9825] text-white text-center  p-4 rounded-2xl capitalize">
            les responsables de laboratoire {etablissmentInfo[0].name}
          </span>
        </div>
        {condition? (
          <div className="flex lg:flex-row flex-col  gap-4 items-center justify-center">
            <span className="text-2xl font-semibold flex lg:flex-row flex-col items-center gap-4">
              <span className="text-[#ff9825] uppercase flex items-center gap-2">
                le directeur <User />:{" "}
              </span>
              {etablissmentInfo[0]?.responsables[0]?.directeur}
            </span>
            <span className="text-2xl font-semibold flex lg:flex-row flex-col items-center gap-4">
              <span className="text-[#ff9825] uppercase flex items-center gap-2">
                email <Mail size={30} /> :{" "}
              </span>
              {etablissmentInfo[0]?.responsables[0]?.email}
            </span>
          </div>
        ) : (
          <div className=" text-center text-[#ff9825] uppercase text-2xl font-semibold">Aucune donnée de ce laboratoire</div>
        )}
      </div>
    </>
  );
}
