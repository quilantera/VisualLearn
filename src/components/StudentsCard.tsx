
import { AlunosPorDisciplinaTeacher} from "@/types/typesTeacher";

import Student from "@/assets/astronauta_com_estrela.jpg";
import Image from "next/image";
import { RadiusChart } from "./RadiusChart/RadiusChart";
import { TitleDashBoard } from "./TitleDashboard";
import { ButtonLink } from "./ButtonLink";
import { PencilRulerIcon } from "lucide-react";

interface StudentCardProps {
  student: AlunosPorDisciplinaTeacher;
  totalLessons: number;
}

export function StudentCard({student, totalLessons}: StudentCardProps ) {

    const totalLessonsAnswered = student.atividadesAluno.filter(atividadeAluno => atividadeAluno.dataEntrega !== null).length;

    const totalNoteLessons = student.atividadesAluno.reduce((sum, atividadeAluno) => {
        if (atividadeAluno.nota !== undefined) {
            return sum + atividadeAluno.nota;
        }
        return sum;
    }, 0);
    
    const average = totalNoteLessons / totalLessonsAnswered;
    
  return (
    <article
    tabIndex={0}
    className="relative flex w-full border border-slate-300 items-center justify-between overflow-hidden  mb-6 rounded-lg bg-zinc-50 px-6 py-4 shadow-lg duration-300 hover:scale-[1.02] dark:border-2 dark:border-white dark:bg-gray-900">
      <div className="flex gap-6 w-2/5">
        { (student.urlAvatar ? (
               /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                      src={student.urlAvatar}
                      alt={student.nome}
                      className="h-16 w-16 rounded-full object-cover"
                  />
              ) : (
                  <Image
                      src={Student}
                      alt={student.nome}
                      className="h-16 w-16 rounded-full object-cover"
                      width={100}
                      height={100}
                  />
              ))}
        <div className="flex items-center justify-center ">
          <TitleDashBoard text={student.nome} color="slate"  size={1}/>
            
        </div>
      </div>
      <div className="flex items-center justify-center  w-1/5">
        <div className=" flex  justify-center items-center gap-[4px] min-h-[36px]  w-fit rounded border-2 px-[20px] py-[8px]">
        <h3 className={` text-center text-base font-medium `}>
            {totalLessonsAnswered} / {totalLessons} 
        </h3>
        <PencilRulerIcon/>
        </div>
       
            
      </div>
      <div className="flex items-center justify-center  w-1/5">
        <RadiusChart
          nota={average || 0}
          total={10}
          width="5rem"
      />
      </div>
      <div className="flex items-center justify-center  w-1/5">
    
         <ButtonLink linkUrl={`/professor/alunos/${student.id}`} linkText="Ver Aluno"/>
         
        
      </div>
    </article>
  );
}
