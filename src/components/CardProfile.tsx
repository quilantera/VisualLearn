import Image from "next/image";

import profile from "../assets/me.jpg";
export function CardProfile() {
  return (
    <div className=" w-full  rounded-sm  bg-zinc-100 py-8  shadow-md duration-300 hover:translate-y-[-6px] dark:border-2  dark:border-zinc-50 dark:bg-gray-600  ">
      <div className="flex flex-col items-center justify-center gap-4 px-10">
        <Image
          src={profile}
          alt={"Imagem de perfil"}
          width={500}
          height={500}
          className=" h-32 w-32 rounded-full border-2 border-slate-300 shadow-lg dark:border-white  "
        />
        <h1 className=" text-center text-2xl font-bold text-zinc-700 dark:text-white ">
          Gustavo Quilante Azevedo
        </h1>
      </div>
      <div className="mb-3 mt-5 h-[1px] w-full bg-zinc-400 " />
      <div className="px-10">
        <h3 className="text-center text-sm font-bold uppercase text-zinc-600 dark:text-white">
          {" "}
          Turma: 6 ano B
        </h3>
      </div>
    </div>
  );
}
