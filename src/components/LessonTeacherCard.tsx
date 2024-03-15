"use client"
import { AtividadeTeacher } from "@/types/typesTeacher";
import { ButtonLink } from "./ButtonLink";
import Subject from "@/assets/subjectsGeneric.jpg";
import Image from "next/image";
import { Users2 } from "lucide-react";

interface LessonTeacherCardProps {
 lesson: AtividadeTeacher;
 useColor?: boolean;
 showImage?: boolean;
}

export function LessonTeacherCard({lesson, useColor  = true , showImage = true}: LessonTeacherCardProps) {
  const cor = lesson.cor || 'bg-primary-500';
  const transformDate = (data: Date) => {
    const dia = String(data.getDate());
    const mes = String(data.getMonth() + 1);
    const ano = String(data.getFullYear());
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <article
    tabIndex={0}
    className="relative flex gap-4 w-full border border-slate-300 items-center justify-between overflow-hidden  mb-6 rounded-lg bg-zinc-50 px-6 py-4 shadow-lg duration-300 hover:scale-[1.02] dark:border-2 dark:border-white dark:bg-gray-900">
      {useColor && <div className={`absolute left-0 h-full w-2 ${cor} dark:bg-slate-300`} />}
      <div className="flex gap-4 w-2/5">
        {showImage &&  (lesson.urlImagem ? (
               /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                      src={lesson.urlImagem}
                      alt={lesson.nome}
                      className="h-16 w-16 rounded-full object-cover"
                  />
              ) : (
                  <Image
                      src={Subject}
                      alt={lesson.nome}
                      className="h-16 w-16 rounded-full object-cover"
                      width={100}
                      height={100}
                  />
              ))}
        <div className=" items-center justify-center ">
          <h2 className="text-base font-semibold text-zinc-600 dark:text-white">
            {lesson.nomeDisciplina} - {lesson.nomeTurma}
          </h2>
          <h3 className="text-lg font-semibold">{lesson.nome}</h3>
        </div>
      </div>
      <div className="flex items-center justify-center  w-1/5">
        <h3 className="text-base font-medium">{transformDate(new Date(lesson.prazo))}</h3>
      </div>
      <div className="flex items-center justify-center  w-1/5">
          <div 
              className={` flex  w-[90%]  items-center gap-2 justify-center rounded border-2 px-2 py-2 text-center text-base font-medium `}
            >
              <h3> {lesson.alunosResponderam} / {lesson.totalAlunosDisponiveis} </h3>
              <Users2 />
            </div>
     
      </div>
        
      <div className="flex items-center justify-center  w-1/5">
        <ButtonLink linkUrl={`/professor/tarefas/${lesson.id}/alunos`} linkText="ver atividade"/>
        
      </div>
    </article>
  );
}
