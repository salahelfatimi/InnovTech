import { ArrowLeft } from "react-feather";


export default function BackButton() {
  

  const goBack = () => {
    window.history.back();
  };

  return (
    <a href="#" onClick={goBack}>
      <button
        
        className=" flex items-center gap-1  z-10 bg-[#e5e7eb] dark:bg-[#374151] p-3 rounded-md "
      >
        <ArrowLeft size={25} className="duration-1000 transition text-[#ff9825]" />
        <span className=" font-bold text-[#ff9825]">Back</span>
      </button>
    </a>
  );
}
