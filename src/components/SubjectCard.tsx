'use client';

import { useRouter } from "next/navigation";
import * as Progress from "@radix-ui/react-progress";
import { TitleDashBoard } from "./TitleDashboard";
import { AtividadeStudent, DisciplinasStudent } from "@/types/typesStudent";
interface MateriasProps{
  materia: DisciplinasStudent;
  nameClass?: string;
}

export function SubjectCard({ materia, nameClass }: MateriasProps) {
  const router = useRouter();
  const cor = materia.cor || 'bg-primary-500';
  function handleClick(){
    router.push(`materias/${materia.id}`);
  }
  
  function totalResponses(atividades: AtividadeStudent[]): number {
    const totalResponses = atividades.reduce((totalResponse: number, currentActivity: AtividadeStudent) => 
        currentActivity.atividadesAluno?.[0].dataEntrega ? totalResponse + 1 : totalResponse, 0);
    return totalResponses;
}

  return (
    <article
      className=" grid min-h-[10.625rem] w-[17.65rem] pt-5 pb-10 px-3 border hover:text-slate-50 hover:bg-slate-200 border-slate-200   rounded-md bg-white shadow-lg duration-300 ease-in-out hover:scale-105 dark:border-2 dark:border-white dark:bg-gray-900"
      role={`button`}// Use o nome da matéria no aria-label
      aria-label={`Cartão selecione Matéria`}
      tabIndex={0}
      onClick={handleClick}
      onSelect={handleClick}
    >
       <div className="w-full justify-center  flex">
      <img src={materia.urlImagem}
        className=" h-36 w-[100%] object-cover rounded-md"
        alt={` imagem disciplina ${materia.nome}`}/>
      </div>
      <div
       className={` flex flex-col justify-center  py-3  hover:text-slate-50`}>
       <TitleDashBoard text={materia.nome} size={5} weight="medium" />
        {materia.professor?.nome && 
         <TitleDashBoard  text={ materia.professor.nome} size={4} ariaLabel={`professor: ${ materia.professor.nome} `} color="gray" weight="base"/>
        }
        {
          nameClass &&
          <TitleDashBoard text={nameClass} size={4} color={"gray"} weight="base"/>
        }
      </div>
     
      <div>
        {materia.atividades &&
      <Progress.Root
          className="relative self-center h-3 dark:h-4 w-10/12 overflow-hidden rounded bg-zinc-300 dark:bg-zinc-900  dark:border-2 dark:border-white"
          style={{ transform: `translateZ(0)` }}
          value={materia.atividades!.length || 100}
        >
          <Progress.Indicator
            className=" h-full w-full bg-cyan-800 duration-500 dark:bg-sky-400"
            style={{ transform: `translateX(-${(100 - 100 * (totalResponses(materia.atividades!)/materia.atividades!.length))||100}%)` }}
          />
        </Progress.Root>
    }
      </div>
      
    </article>
  );
}
