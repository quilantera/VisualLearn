"use client"
import { LessonListHeader } from "./LessonListHeader";
import { LessonTeacherCard } from "./LessonTeacherCard";
import { AtividadeTeacher } from "@/types/typesTeacher";

interface ShowLessonsProps {
    lessons: AtividadeTeacher[];
    useColor: boolean;
    showImage: boolean;
    
}

export function LessonsListTeacher({ lessons, useColor =false, showImage = true}: ShowLessonsProps) {
       
    return (
        <div className="h-[90vh] flex flex-col">
         
            <LessonListHeader lessonNames={["Prazo de Entrega", " Respostas", "Ação"]} firstName={"Nome da Atividade"} />
         
            
            <div className=" flex-1 overflow-y-scroll scrollbar mt-2 w-full gap-4 pl-2 pr-4 pt-1">
                {lessons.map((lesson) => (
                    <LessonTeacherCard key={lesson.id} lesson={lesson} useColor={useColor} showImage={showImage}  />
                ))}
            </div>
        </div>
    );
}