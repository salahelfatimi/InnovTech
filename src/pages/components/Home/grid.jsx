import { useEffect, useState } from "react";

export default function Grid() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/json/grid.json");
      const dataGet = await response.json();
      setData(dataGet);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3  gap-6 relative z-10">
      
          {data.map((ele, index) => (
          <div
            key={index}
            className="flex flex-col gap-8   h-[100%]      bg-white dark:bg-[#1c1f24] dark:text-white text-black p-6 rounded-xl"
          >
            <span className=" text-6xl text-center"  >{ele.icon}</span>
            <span className="text-[#ff9825] text-center  font-bold text-lg md:text-2xl">
              {ele.title}
            </span>
            <span className=" text-sm  dark:text-[#DFE0DF]">{ele.description}</span>
          </div>
        ))}
      </div>
    </>
  );
}
