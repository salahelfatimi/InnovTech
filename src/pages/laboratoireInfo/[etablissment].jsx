"use client"
import { useRouter } from 'next/router';
export default function laboratoireInfo(){
    const router = useRouter();
    return(
        <>
           <div className='container mt-10 py-12 relative z-10 '>
            <span className='text-black'>{router.query.etablissment}</span>
            </div> 
        </>
    )
}