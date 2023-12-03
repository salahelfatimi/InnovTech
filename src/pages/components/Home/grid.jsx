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
            className="flex flex-col gap-8 bg-white       dark:bg-[#1c1f24] dark:text-white text-black p-6 rounded-3xl"
          >
            <span className=" text-4xl md:text-5xl pb-4">{ele.icon}</span>
            <span className="text-[#ff9825]  font-bold text-lg md:text-2xl">
              {ele.title}
            </span>
            <span className=" text-sm font-bold">{ele.description}</span>
          </div>
        ))}
      </div>
    </>
  );
}
