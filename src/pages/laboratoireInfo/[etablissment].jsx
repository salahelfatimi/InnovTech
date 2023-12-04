import { useRouter } from "next/router";
import Loading from "../components/loading";
export default function LaboratoireInfo() {
  const router = useRouter();
  const etablissment = router.query.etablissment;
  return (
    <>
      <div className="container mt-10 py-12 relative z-10 ">
        <Loading />
      </div>
    </>
  );
}
