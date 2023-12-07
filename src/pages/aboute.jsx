import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "./components/loading";
import ButtonUp from "./components/buttonUp";

export default function Aboute() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/json/etablisssmentAboute.json");
      const dataGet = await response.json();
      setData(dataGet);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className=" mx-auto py-24 relative z-10 pt-12">
        <Loading />
        <ButtonUp/>
        <div className="container z-10 relative">
          <h1 className="text-2xl  lg:text-4xl text-center font-extrabold mb-6 text-[#ff9825] shadow-3xl">
            À propos d&apos;InnovTech : Ingénierie et Innovation Technologique
            des Systèmes et des Procédés
          </h1>

          <section className="mb-8 text-center lg:text-start">
            <h2 className="text-xl  lg:text-3xl text-center lg:text-start font-extrabold mb-4 text-[#ff9825]">
              Bienvenue chez InnovTech
            </h2>
            <p className=" font-bold  dark:text-[#DFE0DF]">
              InnovTech est un programme de doctorat de pointe proposé par le
              Centre d&apos;Études Doctorales en Sciences et Ingénierie (SI) à
              la Faculté des Sciences et Techniques (FST). Ce programme vise à
              favoriser la recherche appliquée, numérique et expérimentale en
              mettant l&apos;accent sur la résolution des grands défis
              sociétaux. Des énergies renouvelables aux nouveaux matériaux, en
              passant par les structures innovantes, la transformation numérique
              et l&apos;intelligence artificielle, InnovTech rassemble des
              laboratoires de recherche et des équipes pour contribuer au
              développement scientifique tant dans le secteur public que privé.
            </p>
          </section>

          <section className="mb-8 ">
            <h2 className="text-xl  lg:text-3xl font-extrabold mb-4 text-center lg:text-start text-[#ff9825]">
              Notre Mission
            </h2>
            <ul className="list-disc pl-6  font-bold   dark:text-[#DFE0DF]">
              <li>
                Communication efficace : Développer de solides compétences en
                communication en anglais, en français et à travers divers outils
                de transmission.
              </li>
              <li>
                Entrepreneuriat, Gestion et Innovation : Nourrir l&apos;esprit
                d&apos;entreprise, les compétences en gestion et la pensée
                innovante.
              </li>
              <li>
                Excellence scientifique et technique : Assurer l&apos;excellence
                dans les aspects scientifiques et techniques de la recherche
                menée.
              </li>
            </ul>
          </section>

          

          <section className="mb-8 ">
            <h2 className="text-xl  lg:text-3xl font-extrabold text-center lg:text-start mb-4 text-[#ff9825]">
              Environnement de recherche collaboratif
            </h2>
            <p className="font-bold  text-center lg:text-start dark:text-[#DFE0DF]">
              En réponse aux orientations stratégiques de l&apos;Université Cadi
              Ayyad (UCA), InnovTech réunit 14 laboratoires et 5 équipes de
              recherche de 5 institutions différentes réparties dans trois
              villes (Marrakech, Safi et Essaouira). Cette collaboration crée
              non seulement une masse critique compétitive au niveau national et
              international, mais vise également à établir un centre de
              recherche qui serve de référence nationale et internationale en
              matière d&apos;innovation technologique.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl  lg:text-3xl font-extrabold mb-10 text-[#ff9825]">
              Institutions partenaires
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3  gap-6 relative z-10">
              {data.map((ele, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 bg-white shadow-lg      dark:bg-[#1c1f24]  p-6 rounded-3xl"
                >
                  <span className="text-[#ff9825]  font-bold text-lg md:text-4xl">
                    {ele.title}
                  </span>
                  <span className="  font-medium lg:font-semibold  dark:text-[#DFE0DF]">
                    {ele.description}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8 ">
            <h2 className="text-xl  lg:text-3xl text-center lg:text-start font-extrabold mb-4 text-[#ff9825]">
              Rejoignez-nous pour façonner l&apos;avenir
            </h2>
            <p className="font-bold   text-center lg:text-start dark:text-[#DFE0DF] ">
              InnovTech ne propose pas seulement une plateforme pour la
              recherche doctorale, mais contribue également à la création
              d&apos;un environnement de recherche dynamique et collaboratif.
              Ensemble, nous nous efforçons de recruter les meilleurs diplômés,
              de produire des publications percutantes, de sécuriser
              d&apos;importants contrats de recherche, de tisser des liens
              solides avec les secteurs industriels, de soutenir de nombreuses
              thèses annuelles et de participer aux appels à projets
              internationaux.
            </p>
            <p className="font-bold  text-center lg:text-start ">
              Pour des renseignements et des collaborations, contactez-nous à{" "}
              <Link href="/contact" className="text-[#0099ff]">
                Cliquez ici
              </Link>
            </p>
          </section>

          <p className="font-bold   text-center lg:text-start dark:text-[#DFE0DF]">
            Bienvenue chez InnovTech, là où l&apos;innovation rencontre
            l&apos;excellence en ingénierie !
          </p>
        </div>
      </div>
    </>
  );
}
