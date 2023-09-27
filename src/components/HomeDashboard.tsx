
import { PrimeiroCard } from "./PrimeiroCard";

import Image from "next/image";
import tarefa from "../assets/5800_9_04.jpg"
import Materia from "../assets/3700_1_03.jpg"
import Link from "next/link";
export function HomeDashboard() {
  return (
    <section className="flex flex-col w-full gap-8 mt-5  dark:bg-gray-800">
      {//<SchoolDataCard/>
      }
      <PrimeiroCard/>
      <div className="w-full flex gap-10 justify-center">
        <article className="w-4/12 py-3   bg-slate-50 rounded-xl flex flex-col gap-4 items-center  shadow-lg hover:scale-105 duration-200 dark:bg-zinc-800 dark:border-2 dark:border-white ">
          <h2 className=" mt-2 font-semibold text-zinc-800 text-2xl  tracking-[0.5px] dark:text-slate-100 ">Tarefas </h2>
          <Image src={tarefa} alt={"imagem seção tarefa"} width={1000} height={1000}  className="h-48 w-48 rounded-md"/>
          <Link href={"/tarefas"} className="rounded-md bg-primary-400 px-6 py-3 text-base font-medium tracking-[2px] text-white duration-300 ease-in-out hover:bg-blue-900 dark:border-2 dark:border-white dark:bg-zinc-900 dark:font-semibold dark:hover:bg-white dark:hover:text-black" >
            Iniciar
          </Link>
        </article>
        <article className="w-4/12 py-3  bg-slate-50 rounded-xl flex flex-col gap-4 items-center shadow-lg hover:scale-105 duration-200  dark:bg-zinc-800 dark:border-2 dark:border-white ">
          <h2 className=" mt-2 font-semibold text-zinc-800 text-2xl  tracking-[0.5px]  dark:text-slate-100 ">Matérias </h2>
          <Image src={Materia} alt={"imagem seção tarefa"} width={1000} height={1000}  className="h-48 w-48 rounded-md"/>
          <Link href={"/materias"} className="rounded-md bg-primary-400 px-6 py-3 text-base font-medium tracking-[2px] text-white duration-300 ease-in-out hover:bg-blue-900 dark:border-2 dark:border-white dark:bg-zinc-900 dark:font-semibold dark:hover:bg-white dark:hover:text-black" >
            Iniciar
          </Link>
        </article>
    
      </div>
     
    </section>
  );
}
