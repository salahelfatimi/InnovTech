import Link from "next/link";
import { AlertOctagon, Codesandbox, Home } from "react-feather";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center h-screen bg-[#2d2e32]">
        <AlertOctagon size={90} className="text-red-500" />
        <h2 className="text-red-500 font-bold text-5xl">Not Found</h2>
        <p className=" font-bold text-2xl flex items-center gap-2 flex-col text-center justify-center text-white">
          Could not find the requested resource in  <span className=" flex items-center  "><Codesandbox size={35} className="text-[#ff9825]"/>Innov<span className="text-[#ff9825]">TECH</span></span>
        </p>
        <Link
          className=" font-bold text-xl text-blue-600 flex hover:text-[#ff9825] duration-700 items-center gap-2"
          href="/"
        >
          Return Home <Home size={30} />
        </Link>
      </div>
    </>
  );
}
