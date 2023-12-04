"use client"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ChevronDown ,Link, ArrowUpRight } from 'react-feather';

export default  function  Labortoures  () {
  const [openItem, setOpenItem] = useState(null);
  const router = useRouter();
  const [laboratoire,setLaboratoire]=useState([])
  
  useEffect(  ()  =>{
    const fetchData  = async () => {
      if(router.query.city){
        try {
            const response = await  fetch(`/json/etablissmentInfo/${router.query.city}.json`)
            const data= await  response.json()
            setLaboratoire(data)
            
        }catch(err){
            console.log(err)
        }
      }
  }
  fetchData()
  }

  ,[router.query.city])

  const  toggleOpen = (id) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === id ? null : id));
  };

  return (
    <div className='container mt-10 py-12 relative z-10 '>
      <div className='flex flex-col gap-8'>
        {laboratoire?.map((ele, index) => (
          <div className='  ' key={index}>
            <div> 
              <div className={`flex justify-between items-center bg-[#ff9825] p-4   drop-shadow-2xl ${openItem === ele.id ? 'rounded-t-3xl' : 'rounded-3xl'}`}>
                <span className='font-bold text-lg text-white'>{ele.etablissment}</span>
                <button onClick={() => toggleOpen(ele.id)} className={`transition duration-700 text-white ${openItem === ele.id ? 'rotate-0' : 'rotate-180'}`}>
                  <ChevronDown size={30} className=' stroke-2'/>  
                </button>
              </div>
              <div className={` relative rounded-b-3xl   bg-[#FFFFFF] border-b-2 border-x-2 border-[#ff9825] dark:bg-[#1c1f24] p-4 drop-shadow-2xl  ${openItem === ele.id ? 'block' : 'hidden'}`}>
                <div>
                    <h2 className="mb-4   text-gray-900 dark:text-white font-bold text-base md:text-lg">Les Laboratoire impliqués : </h2>
                    <div  className=" pb-4 ml-8 space-y-4 text-gray-500   dark:text-gray-400">
                      {
                          ele.laboratoire?.map((ele,index)=>(
                                <a key={index} href={`/laboratoireInfo/${ele.url}`} className='hover:text-[#ff9825] flex gap-2 duration-700 '>
                                      
                                      {ele.title}
                                      <Link size={20} className='lg:block hidden'/>
                                </a>  
                          ))
                      }
                    </div>
                </div>
               
                <ol className={`  ${!ele.equipes ?"hidden":"block"} `}>
                    <h2 className={`mb-4 text-lg font-bold text-gray-900 dark:text-white `}>Les équipes impliquées  : </h2>
                    <li>
                    <div  className=" pb-4 ml-8 space-y-4 text-gray-500   dark:text-gray-400">
                      {
                          ele.laboratoire?.map((ele,index)=>(
                                <a key={index} href={`/laboratoireInfo/${ele.url}`} className='hover:text-[#ff9825] flex gap-2  duration-700 '>    
                                      {ele.title}
                                      <Link size={20} className='lg:block hidden'/>
                                      
                                </a>  
                          ))
                      }
                    </div>
                    </li>
                </ol>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}
