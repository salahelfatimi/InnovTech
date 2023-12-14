import { useRouter } from "next/router";
import Loading from "../components/loading";
import { useEffect, useState } from "react";
import { AlertTriangle, Mail, User, XOctagon } from "react-feather";
export default function LaboratoireInfo() {
  const router = useRouter();
  const [etablissmentInfo, setEtablissmentInfo] = useState([]);
  const etablissment = router.query.etablissment;
  // Define an asynchronous function to fetch data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/json/laboratoireInfo/laboratoire.json`);
      const data = await response.json();
      const find = await data.find((ele) => ele.name === etablissment);
      setEtablissmentInfo(find);
    
    };
    fetchData();
  }, [etablissment]);

  return (
    <>
    <div className="container flex flex-col gap-8 mt-16 py-8 relative z-10 ">
    {
     
      
        <>
            <div className="flex flex-col  items-center ">
              <span className="lg:text-4xl text-xl  font-bold  bg-gray-200 dark:bg-gray-700  text-[#ff9825]  text-center  py-4 px-10 rounded-md uppercase">
                laboratoire {etablissmentInfo?.name}
              </span>
            </div>
          <Loading />
          <div className="relative  overflow-x-auto shadow-md sm:rounded-xl">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 rounded-xl">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <span className=" flex items-center gap-2"><User size={30} /> les responsables</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className=" flex items-center  gap-2"><Mail size={30} /> email</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {etablissmentInfo?.responsables?.map((ele, index) => (
                  <tr key={index} className="bg-white border-t dark:bg-[#1c1f24] dark:border-gray-700">
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{ele.name}</td>
                    <td className="px-6 py-4"><a  className="hover:text-[#ff9825]  duration-500" href={`mailto:${ele.email}`}>{ele.email}</a></td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div >
          
           
            <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
            <table className="w-full    text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
              <thead className="text-xs  text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 rounded-xl">
                <tr>
                  <th scope="col" className="px-6 py-3 ">
                    <span className=" flex   items-center gap-2"><User size={30} /> le doctorant</span>
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    <span className=" flex  items-center gap-2"> titre de la these</span>
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    <span className=" flex justify-center items-center gap-2"> axes</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {etablissmentInfo?.doctorants?.map((ele, index) => (
                    <tr key={index} className="bg-white border-t dark:bg-[#1c1f24] dark:border-gray-700 w-full">
                      <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{ele.nom}</td>
                      <td scope="row" className="px-6 py-4    whitespace-normal  ">{ele.titre_these}</td>
                      <td scope="row" className="px-6 py-4 text-center  whitespace-nowrap">{ele.axe}</td>

                    </tr>
                ))}
              </tbody>
            </table>
          </div>
           </div>
           </>
} 
    </div> 
    </>
  );
            
}
