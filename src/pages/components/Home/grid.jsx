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
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6 relative pt-12 pb-32">
      
          {data.map((ele, index) => (
          <div
            key={index}
            className="flex flex-col bg-white dark:bg-[#1c1f24] dark:text-white p-6 rounded-md"
          >
            <span className=" text-7xl text-center mb-4">{ele.icon}</span>
            <span className="text-[#ff9825] text-center  font-bold text-lg md:text-xl mb-8">
              {ele.title}
            </span>
            <span className="leading-relaxed text-sm text-black/80 dark:text-[#DFE0DF]">{ele.description}</span>
          </div>
        ))}
      </div>
    </>
  );
}
