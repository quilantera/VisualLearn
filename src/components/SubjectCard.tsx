'use client';
import { Materias } from "@/app/(authenticated)/materias/page";
import { useRouter } from "next/navigation";
interface MateriasProps{
  materia: Materias;
}

export function SubjectCard({ materia }: MateriasProps) {
  const router = useRouter();
  const cor = materia.cor || 'bg-primary-500';
  function handleClick(){
    router.push(`materias/${materia.id}`);
  }
  
  return (
    <div
      className=" grid min-h-[15.625rem] w-[20rem] overflow-hidden rounded-2xl bg-white shadow-lg duration-300 ease-in-out hover:scale-105 dark:border-2 dark:border-white dark:bg-gray-950"
      role="region" // Adicione um role para identificar essa seção como uma região da página
      aria-label={`Matéria: ${materia.nome}`} // Use o nome da matéria no aria-label
      tabIndex={0}
    >
      <div
     
       className={` ${cor} flex flex-col justify-center gap-3 px-3 py-2 dark:border-b-2 dark:border-white dark:bg-gray-950`}>
        <h2 className="w-fit break-words bg-black  bg-opacity-70 px-2 py-[2px] text-xl font-normal tracking-[1px] text-white">
          6º ano - {materia.nome}
        </h2>
        <h3 className="w-fit bg-black bg-opacity-70 px-2 py-[2px] font-normal tracking-[1px] text-white">
          Professor {materia.professor.nome}
        </h3>
      </div>
      <div className=" align-end flex px-3 pb-4">
        <button
          onClick={handleClick}
          className="h-fit self-end rounded-md bg-primary-400 px-6 py-3 text-base font-medium tracking-[2px] text-white duration-300 ease-in-out hover:bg-blue-900 dark:border-2 dark:border-white dark:bg-black dark:font-semibold dark:hover:bg-white dark:hover:text-black"
        >
          Iniciar
        </button>
      </div>
    </div>
  );
}
