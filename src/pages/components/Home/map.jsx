export default function Map(){
    return(
        <>
            <div className="   relative">
                <iframe className=" relative "
                    src="https://www.google.com/maps/d/u/0/embed?mid=1EEBYDK-DPQ05E25i4TjANJyBoJ9qd-8&ehbc=2E312F&noprof=1"
                    width="100%"
                    height="600"
                ></iframe>
                <div className=" absolute dark:bg-[#272b34] bg-[#f4f7fc] -top-1 right-0 left-0  p-8 z-0"></div>
                <span className="lg:text-4xl container text-2xl text-[#0063f7]   font-bold absolute -top-10 text-center z-30  right-0 left-0">
                    Découvrez les 6 Établissements sur la Carte
                </span>
            </div>
        </>
    )
}