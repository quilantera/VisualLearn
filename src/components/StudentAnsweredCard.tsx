
import { AtividadeAlunoTeacher, AtividadeTeacher } from "@/types/typesTeacher";

import Student from "@/assets/astronauta_com_estrela.jpg";
import Image from "next/image";
import { RadiusChart } from "./RadiusChart/RadiusChart";
import { TitleDashBoard } from "./TitleDashboard";
import { ButtonLink } from "./ButtonLink";

interface StudentAnsweredCardProps {
  studentLesson: AtividadeAlunoTeacher;
  color?: string;
  deadLine: Date;
}

export function StudentAnsweredCard({studentLesson,color,deadLine}: StudentAnsweredCardProps) {
  const cor = color || 'bg-primary-500';
  const transformDate = (data: Date) => {
    const dia = String(data.getDate());
    const mes = String(data.getMonth() + 1);
    const ano = String(data.getFullYear());
    return `${dia}/${mes}/${ano}`;
  };

  const getStatus = () => {
    if (studentLesson.dataEntrega) {
      return "Entregue";
    }
    if (new Date(deadLine) < new Date()) {
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
    className="relative flex w-full border border-slate-300 items-center justify-between overflow-hidden  mb-6 rounded-lg bg-zinc-50 px-6 py-4 shadow-lg duration-300 hover:scale-[1.02] dark:border-2 dark:border-white dark:bg-gray-900">
      <div className={`absolute flex items-center  left-0 h-full w-2 ${cor} dark:bg-slate-300`} />
      <div className="flex gap-6 w-2/5">
        { (studentLesson.aluno.urlAvatar ? (
               /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                      src={studentLesson.aluno.urlAvatar}
                      alt={studentLesson.aluno.nome}
                      className="h-16 w-16 rounded-full object-cover"
                  />
              ) : (
                  <Image
                      src={Student}
                      alt={studentLesson.aluno.nome}
                      className="h-16 w-16 rounded-full object-cover"
                      width={100}
                      height={100}
                  />
              ))}
        <div className="flex items-center justify-center ">
          <TitleDashBoard text={studentLesson.aluno.nome} color="slate"  size={1}/>
            
        </div>
      </div>
      <div className="flex items-center justify-center  w-1/5">
      <h3
          className={`h-[2.2rem]  w-[80%] rounded border-2 px-2 py-1 text-center text-base font-medium ${getStatusColor()}`}
        >
          {getStatus()}
        </h3>
      </div>
      <div className="flex items-center justify-center  w-1/5">
        <RadiusChart
          nota={studentLesson.nota || 0}
          total={10}
          width="5rem"
      />
      </div>
      <div className="flex items-center justify-center  w-1/5">
      {getStatus() === "Entregue" ? (
                  <ButtonLink linkUrl={`/atividade/relatorio/${studentLesson.id}`} linkText="Ver Atividade"/>
                  ) : (
                      <div className="h-full flex items-center justify-center">
                         <h3> Aguardando entrega</h3>
                      </div>
          )}
        
      </div>
    </article>
  );
}
