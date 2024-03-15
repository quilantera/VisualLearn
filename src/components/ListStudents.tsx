"use client"
import { SearchInput } from "./SearchInput";
import { AlunosPorDisciplinaTeacher } from "@/types/typesTeacher";
import { StudentCard } from "./StudentsCard";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { LessonListHeader } from "./LessonListHeader";

interface ListStudentsProps {
  students: AlunosPorDisciplinaTeacher[];
  totalLessons: number;
}

export function ListStudents({ students, totalLessons }: ListStudentsProps) {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filtroAluno') || "";


  const filteredStudents = useCallback(() => {
    if (filter !== "") {
      return students.filter(student => student.nome.toLowerCase().includes(filter.toLowerCase()));
    } else {
      return students;
    }
  }, [filter, students]);

  return (
    <>
  
      <div className="flex mr-[8px] justify-end self-end   items-center">
          <SearchInput nameParams={"filtroAluno"} placeholder={"Filtrar Aluno"} />
          
        </div>
   
        
      
      <LessonListHeader lessonNames={["Atividades Respondidas", " Média", "Ação"]} firstName={"Nome do Aluno"} />
      <div className="scrollbar mt-2 max-h-[420px] w-full overflow-y-scroll px-5">
        <div className="flex flex-col gap-4 py-4 ">
          {filteredStudents().map((student: AlunosPorDisciplinaTeacher) => (
            <StudentCard key={student.id} student={student} totalLessons={totalLessons} />
          ))}
        </div>
      </div>
    </>
  )
}
