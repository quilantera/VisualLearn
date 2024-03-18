
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
  const transformDate = (data: Date) => {
    const dia = String(data.getDate());
    const mes = String(data.getMonth() + 1);
    const ano = String(data.getFullYear());
    return `${dia}/${mes}/${ano}`;
  };

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
    className="relative sm:flex-col sm:px-[24px] sm:py-[16px] min-h-[124px] border border-slate-300 flex mb-4 w-full items-center justify-between overflow-hidden rounded-lg bg-zinc-50 px-6 py-4 shadow-lg duration-300 hover:scale-[1.02] dark:border-2 dark:border-white dark:bg-gray-900">
     { useColor === true && <div className={`absolute left-0 h-full sm:hidden w-2 ${cor} dark:bg-slate-300`} /> }
     
      <div className="flex sm:flex-col gap-6 w-2/5 sm:w-full">
        {subjectImage || lesson.urlImagem ? (
          /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                      src={subjectImage|| lesson.urlImagem}
                      alt={lesson.nome}
                      className="h-16 w-16 sm:w-full  sm:h-40 sm:rounded rounded-full object-cover"
                  />
              ) : (
                  <Image
                      src={Subject}
                      alt={lesson.nome}
                      className="h-16 w-16 sm:w-full sm:h-40 sm:rounded rounded-full object-cover"
                      width={100}
                      height={100}
                  />
              )}
        <div className="ml-2 sm:ml-0 sm:flex sm:flex-col sm:w-full">
          <h2 className="text-lg sm:text-lg sm:w-full font-semibold text-slate-600 dark:text-white">
            {subjectName}
          </h2>
          <h3 className="text-xl  sm:text-2xl sm:w-full font-semibold text-slate-900 dark:text-slate-50">{lesson.nome}</h3>
        </div>
      </div>
      <div className="flex items-center justify-center sm:pt-[12px] w-1/5 sm:w-full">
        <h3 className="text-lg sm:text-lg sm:w-full font-medium dark:text-slate-50 "  aria-label={`prazo de entrega: ${new Date(lesson.prazo).toLocaleDateString('pt-BR')}`}>{new Date(lesson.prazo).toLocaleDateString('pt-BR')}</h3>
     </div>

      <div className="flex items-center justify-center  w-1/5 sm:w-full">
        <h3
          className={`h-[2.2rem]  w-[90%] sm:text-lg sm:py-2 rounded border-2 px-2 py-1 text-center text-base font-medium ${getStatusColor()}`}
        >
          {getStatus()}
        </h3>
      </div> 
     
        {getStatus() !== "Entregue" ? (
           <div className="flex items-center justify-center w-1/5 sm:w-full sm:mt-[12px]">
                      <Link
                          href={`/atividade/${lesson.id}`}
                          title="Iniciar Exercício"
                          aria-label="Iniciar Exercício"
                          className="rounded sm:w-[90%] sm:flex sm:justify-center bg-violet-900 px-5 py-[0.5rem] text-lg font-medium text-white duration-300 ease-in-out hover:bg-violet-950 dark:border-2 dark:border-white dark:bg-gray-800 dark:hover:bg-slate-50 dark:hover:text-gray-800"
                      >
                          Iniciar
                      </Link>
            </div>
                  ) : ( 
                  <div className="h-full w-1/5   sm:w-full flex items-center justify-center sm:mt-[12px]"  >
                    <RadiusChart
                        nota={lesson.atividadesAluno![0].nota || 0}
                        total={10}
                        width="6rem"
                    />
                  </div>
          )}
    
      </article>
  );
}