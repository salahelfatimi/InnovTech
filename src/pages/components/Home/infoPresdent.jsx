

export default function InfoPresdent() {
  return (
    <>
      <div className=" container w-full flex flex-col lg:flex-row items-center justify-center gap-8 ">
        <img
          className="  rounded-xl md:w-[50%] lg:w-[30%]   "
          src="/image/home/PRÉSIDENT.png"
          alt=""
        />
        <div className="flex flex-col w-1/2 lg:items-start items-center text-center lg:text-start gap-4">
          <span className=" text-2xl lg:text-3xl font-bold text-[#ff9825] ">
            Pr. Blaïd BOUGADIR
          </span>
          <span className=" text-lg  font-medium dark:text-[#DFE0DF]">
            Président de l'Université Cadi Ayyad
          </span>
          <span className=" text-sm  dark:text-[#DFE0DF] line-clamp-3">
            Après seulement 45 ans d&apos;existence, l&apos;Université Cadi Ayyad est le
            cœur battant d&apos;un territoire en marche. Avec quinze établissements
            abritant plus de 120 000 étudiants et dispensant une variété de
            disciplines dans tous les champs du savoir ... 
          </span>
          <a className="underline underline-offset-2 text-blue-500 " href="#">Voir plus</a>
        </div>
      </div>
    </>
  );
}
