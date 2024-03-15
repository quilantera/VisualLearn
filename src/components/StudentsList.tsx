
"use client"
import { LessonListHeader } from "./LessonListHeader";
import { AtividadeAlunoTeacher } from "@/types/typesTeacher";
import { StudentAnsweredCard } from "./StudentAnsweredCard";

interface StudentListProps {
    lessons: AtividadeAlunoTeacher[];
    deadLine: Date;
}

export function StudentList({ lessons, deadLine}: StudentListProps) {

    const sortOptions = [
        { label: "Nome da atividade", value: "nome" },
        { label: "Prazo", value: "prazo" },
        { label: "Status", value: "status" },
    ];
    
    return (
        <div className="flex flex-col h-[90vh] ">
            <div className="flex justify-end pb-2 ">
                {//<SortDropdown options={sortOptions} data={lessons} onChange={handleSortChange} />
                }
            </div>
            <LessonListHeader lessonNames={["Situação", " Nota", "Ação"]} firstName={"Nome do Aluno"} />
         
            
            <div className=" flex-1 overflow-y-scroll scrollbar mt-2 w-full gap-4 pl-2 pr-4 pt-1">
                {lessons.map((lesson, index) => (
                    <StudentAnsweredCard key={index} studentLesson={lesson} deadLine={deadLine} />
                ))}
            </div>
        </div>
    );
}
  