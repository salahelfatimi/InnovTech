
import { useRouter } from 'next/router';
export default function LaboratoireInfo(){
    const router = useRouter();
    const etablissment=router.query.etablissment
    return(
        <>
           <div className='container mt-10 py-12 relative z-10 '>
            <span className='text-black'>{etablissment}</span>
            </div> 
        </>
    )
}