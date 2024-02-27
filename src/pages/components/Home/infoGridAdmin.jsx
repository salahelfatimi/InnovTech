export default function InfoGridAdmin() {
  const Info = [
    { name: "BELKHAYAT DRISS ", title: "Responsable de la formation doctorale Innovtech", image: "driss.png" },
    { name: "ALGOUTI AHMED ", title: "Directeur du Centre D'études doctorale Sciences et Techniques @ Sciences médicales CED STSM ", image: "ahmed.png" },
  ];
  return (
    <>
      <div className=" container grid gap-8 md:grid-cols-2 grid-cols-1">
        {
            Info.map((ele,index)=>(
                <div key={index} className="flex flex-col items-center gap-4">
                    <img className=" h-24 lg:h-44" src={`/image/home/${ele.image}`} alt={ele.name} />
                    <span className="text-[#ff9825] text-center  font-bold lg:text-2xl">Pr.{ele.name}</span>
                    <span className=" text-center lg:text-xl  capitalize">{ele.title}</span>
                </div>
            ))
        }
      </div>
    </>
  );
}
