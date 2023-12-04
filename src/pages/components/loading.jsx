import { useEffect, useState } from "react";

export default function Loading() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setShow(true);
    }, 2000);

    // Clear the interval after 30 seconds
    setTimeout(() => {
      clearInterval(slideInterval);
      setShow(true);
    }, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <>
      <div
        className={`fixed  inset-0 flex items-center justify-center bg-white dark:bg-[#2d2e32] duration-1000 transition z-50  ${
          show == false ? "translate-x-0" : "-translate-y-full"
        } `}
      >
        <span className={`font-extrabold text-4xl animate-bounce `}>
          Innov<span className="text-[#ff9825]">TECH</span>
        </span>
      </div>
    </>
  );
}
