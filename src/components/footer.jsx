export default function Footer(){
    return(
        <>
            <div className="bg-blue-800 py-12 text-white dark:bg-[#1c1f24]">
                <div className=" container flex flex-col  items-center md:items-start ">
                    <span className=" font-bold text-xl text-center md:text-start ">
                        Copyright &copy;  {new Date().getFullYear()} . All rights are reserved 

                    </span>
                </div>
               
            </div>
        </>
    )
}