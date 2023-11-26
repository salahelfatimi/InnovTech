export default function Footer(){
    return(
        <>
            <div className="bg-[#1A60A1] py-16 text-white dark:bg-[#1c1f24]">
                <div className=" container flex flex-col  items-center md:items-start ">
                    <span className=" font-bold text-xl text-center md:text-start ">
                        Copyright &copy;  {new Date().getFullYear()} . All rights are reserved by InnovTech

                    </span>
                </div>
               
            </div>
        </>
    )
}