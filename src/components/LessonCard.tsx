
import Link from "next/link";
import { RadiusChart } from "./RadiusChart/RadiusChart";
import Image from "next/image";
import Subject from "@/assets/subjectsGeneric.jpg";
import { AtividadeStudent } from "@/types/typesStudent";
interface TaskCardProps {
  lesson: AtividadeStudent;
  subjectName: string;
  subjectImage?: string;
  useColor? : boolean;
}

export function LessonCard({ lesson, subjectName, subjectImage, useColor = false }: TaskCardProps) {
  const cor = lesson.cor || 'bg-primary-500';
 

  const getStatus = () => {
    if (lesson.atividadesAluno && lesson.atividadesAluno[0]?.dataEntrega) {
      return "Entregue";
    }
    if (new Date(lesson.prazo) < new Date()) {
      return "Atraso";
    }
    return "Pendente";
  };
  

  const getStatusColor = () => {
    switch (getStatus()) {
      case "Pendente":
        return "flex items-center justify-center text-yellow-800 border-yellow-800 bg-yellow-200 dark:text-white dark:bg-gray-800 dark:border-4";
      case "Entregue":
        return "flex items-center justify-center  text-green-800 border-green-800 bg-green-200 dark:text-white dark:bg-gray-800 dark:border-4";
      case "Atraso":
      default:
        return "flex items-center justify-center text-red-800 border-red-800 bg-red-200 dark:text-white dark:bg-gray-800 dark:border-4";
    }
  };

  return (
    <article 
    tabIndex={0}
    aria-label={getStatus() === "Entregue" ? "Atividade Concluída": "Atividade"}
    className="relative flex-col overflow-hidden  min-h-[124px] border border-slate-300 flex mb-4  min-w-[20vw] w-[22rem] max-w-full items-center  rounded-lg bg-zinc-50 px-[24px] py-4 shadow-lg duration-300 hover:scale-[1.02] dark:border-2 dark:border-white dark:bg-gray-900">
     { useColor === true && <div className={`absolute top-0 left-0 w-full h-4 sm:h-[28px]  ${cor} `} /> }
     
      <div className="flex flex-col gap-2 w-full justify-center items-center mt-[8px] sm:mt-[20px]">
        {subjectImage || lesson.urlImagem ? (
          /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                      src={subjectImage|| lesson.urlImagem}
                      alt={lesson.nome}
                      className="w-full sm:w-[90%] h-40  rounded  object-cover"
                  />
              ) : (
                  <Image
                      src={Subject}
                      alt={lesson.nome}
                      className="w-full  sm:w-[90%] h-40  rounded  object-cover"
                      width={100}
                      height={100}
                  />
              )}
        <div className="flex flex-col w-full">
          <h2 className="text-xl sm:text-lg w-full font-semibold text-slate-600 dark:text-white">
            {subjectName}
          </h2>
          <h3 className="text-2xl sm:text-xl w-full font-bold text-violet-950 dark:text-slate-50">{lesson.nome}</h3>
        </div>
      </div>
      

      <div className="flex items-center my-2  sm:my-1 w-full">
        <h3
          className={`h-[2.2rem] sm:h-fit sm:py-0  w-fit  min-w-[116px] text-base  rounded border-2 px-2 py-1 text-center  font-medium ${getStatusColor()}`}
        >
          {getStatus()}
        </h3>
      </div>
      {getStatus() !== "Entregue"  && 
      <div className="flex items-center justify-center w-full sm:mt-2 mt-4">
        <h3 className="text-lg w-full text-center font-medium  dark:text-slate-50 " >Prazo: {new Date(lesson.prazo).toLocaleDateString('pt-BR')}</h3>
     </div>
          }
        {getStatus() !== "Entregue" ? (
           <div className="flex items-center justify-center w-full sm:mt-2 ">
                      <Link
                          href={`/atividade/${lesson.id}`}
                          title="Iniciar Exercício"
                          aria-label="Iniciar Exercício"
                          className="rounded w-full flex justify-center  bg-violet-900 px-5 py-[0.5rem] text-xl font-medium text-white duration-300 ease-in-out hover:bg-violet-950 dark:border-2 dark:border-white dark:bg-gray-800 dark:hover:bg-slate-50 dark:hover:text-gray-800"
                      >
                          Iniciar
                      </Link>
            </div>
                  ) : ( 
                  <div className="h-full sm:mt-4 w-[90%] justify-center bg-slate-100 border-slate-200 border-2 rounded-lg shadow dark:bg-gray-900  gap-3 flex items-center py-[2px]"  >
                   <h2 className="font-bold text-xl sm:text-lg   "> Sua nota:</h2>
                    <RadiusChart
                        nota={lesson.atividadesAluno![0].nota || 0}
                        total={10}
                        width="4rem"
                    />
                  </div>
          )}
    
      </article>
  );
}