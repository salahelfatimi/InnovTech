import { useRouter } from "next/router";
import Loading from "../components/loading";
import { useEffect, useState } from "react";
export default function LaboratoireInfo() {
  const router = useRouter();
  const [etablissmentInfo,setEtablissmentInfo]=useState([{
    name:"",
    responsables:[],
    doctorants:[]

  }])
  const etablissment = router.query.etablissment;
  useEffect(()=>{
    const fetchData = async() => {
      const  response= await fetch(`/json/laboratoireInfo/laboratoire.json`)
      const  data= await response.json()
      const  find= await data.find((ele)=>ele.name===etablissment)
      if (find){
        const   { doctorants, responsables, name } = find;
        setEtablissmentInfo([{
          name:name,
          responsables:responsables,
          doctorants:doctorants
        }])
      }
  }
    fetchData()
  },[etablissment])
  console.log(etablissmentInfo)
  return (
    <>
      <div className="container mt-10 py-12 relative z-10 ">
        <Loading />
        <div className="flex flex-col ">
            <span className="lg:text-4xl text-2xl  font-bold bg-[#ff9825] text-white text-center  p-4 rounded-2xl capitalize">les responsables de laboratoire {etablissmentInfo[0].name}</span>
        </div>

      </div>
    </>
  );
}
