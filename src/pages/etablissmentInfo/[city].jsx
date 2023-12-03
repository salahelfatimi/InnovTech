"use client"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
      <div className='flex flex-col gap-4'>
        {laboratoire?.map((ele, index) => (
          <div className='  ' key={index}>
            <div> 
              <div className={`flex justify-between items-center bg-[#ff9825] p-4 duration-300  relative z-10 drop-shadow-2xl ${openItem === ele.id ? 'rounded-t-3xl' : 'rounded-3xl'}`}>
                <span className='font-semibold text-lg text-white'>{ele.etablissment}</span>
                <button onClick={() => toggleOpen(ele.id)} className={`transition duration-700 ${openItem === ele.id ? 'rotate-0' : 'rotate-180'}`}>
                  <svg className='w-6 h-6 text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 10'>
                    <path d='M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z' />
                  </svg>
                </button>
              </div>
              <div className={` rounded-b-3xl bg-[#FFFFFF] border-b-4 border-x-4  border-[#ff9825] dark:bg-[#1c1f24] p-4 drop-shadow-2xl relative z-0 transition-all duration-500 ${openItem === ele.id ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0 '}`}>
                <div>
                    <h2 className="mb-4  font-bold text-gray-900 dark:text-white text-base md:text-lg">Les Laboratoire impliqués : </h2>
                    <ul  className=" pb-4 ml-8 space-y-4 text-gray-500 list-disc list-inside md:text-base text-xs dark:text-gray-400">
                    {
                        ele.laboratoire?.map((ele,index)=>(
                                <li  key={index}>
                                    {ele}
                                </li>   
                        ))
                    }
                    </ul>
                </div>
               
                <ol className={`  ${!ele.equipes ?"hidden":"block"} `}>
                    <h2 className={`mb-4 text-lg font-bold text-gray-900 dark:text-white `}>Les équipes impliquées  : </h2>
                    <li>
                    <ul  className="list-disc list-inside pb-4 ml-8 space-y-4 text-gray-500  md:text-base text-xs dark:text-gray-400">
                    {
                        ele.equipes?.map((ele,index)=>(
                                <li  key={index}>
                                    {ele}
                                </li>   
                        ))
                    }
                    </ul>
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
