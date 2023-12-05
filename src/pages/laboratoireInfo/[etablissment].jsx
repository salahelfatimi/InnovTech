import { useRouter } from "next/router";
import Loading from "../components/loading";
import { useEffect, useState } from "react";
import { Mail, User, XOctagon } from "react-feather";
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
              <span className="text-[#ff9825]  font-bold capitalize flex items-center gap-2">
              <User /> le directeur :{" "}
              </span>
              {etablissmentInfo[0]?.responsables[0]?.directeur}
            </span>

            <span className="text-2xl font-semibold flex lg:flex-row flex-col items-center gap-4">
              
                <span className="text-[#ff9825] font-bold  capitalize flex items-center gap-2">
                <Mail size={30} />  email :{" "}
                </span>
                <a className="hover:text-[#4FAAFF] duration-500" href={`mailto:${etablissmentInfo[0]?.responsables[0]?.email}`}>
                {etablissmentInfo[0]?.responsables[0]?.email}
                </a>
            </span>
            
          </div>
        ) : (
          <div className=" flex flex-col lg:flex-row items-center justify-center text-center  gap-2 text-red-500 uppercase text-2xl font-bold"><XOctagon size={50}/> Aucune donnée de ce laboratoire</div>
        )}
      </div>
    </>
  );
}
