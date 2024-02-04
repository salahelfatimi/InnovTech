export default function InfoGridAdmin() {
  const Info = [
    { name: "Driss BELKHAYAT", title: "director FA", image: "driss.png" },
    { name: "Ahmed ALGOUTI", title: "director die LEJ STSM", image: "ahmed.png" },
  ];
  return (
    <>
      <div className=" container grid gap-8 md:grid-cols-2 grid-cols-1">
        {
            Info.map((ele,index)=>(
                <div key={index} className="flex flex-col items-center gap-4">
                    <img className=" h-24 lg:h-44" src={`/image/home/${ele.image}`} alt={ele.name} />
                    <span className="text-[#ff9825] font-bold lg:text-2xl">{ele.name}</span>
                    <span className=" lg:text-xl uppercase">{ele.title}</span>
                </div>
            ))
        }
      </div>
    </>
  );
}
