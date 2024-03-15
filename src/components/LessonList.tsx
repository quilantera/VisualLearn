"use client"
import { LessonCard } from "./LessonCard";
import { SortDropdown } from "./SortDropDown";
import { useState } from "react";
import { LessonListHeader } from "./LessonListHeader";
import { AtividadeStudent } from "@/types/typesStudent";

interface ShowLessonsProps {
    subjectName?: string;
    subjectImage?: string;
    lessons: AtividadeStudent[];
    lessonsHeaderNames: string[];
    useColor?: boolean;
}

export function LessonsList({ subjectName ="undefined", lessons, subjectImage,useColor = false, lessonsHeaderNames }: ShowLessonsProps) {
    const [sortedLessons, setSortedLessons] = useState<AtividadeStudent[]>(lessons);

    const handleSortChange = (sortedData: AtividadeStudent[]) => {
        setSortedLessons(sortedData);
    };

    const sortOptions = [
        { label: "Nome da atividade", value: "nome" },
        { label: "Prazo", value: "prazo" },
        { label: "Status", value: "status" },
    ];
    return (
        <div className="  h-[90vh] flex flex-col">
            <div className="flex justify-end pb-2 ">
                <SortDropdown options={sortOptions} data={lessons} onChange={handleSortChange} />

            </div>
            <LessonListHeader lessonNames={lessonsHeaderNames} firstName={"Nome da Atividade"} />
         
            
            <div className="flex-1 overflow-y-scroll scrollbar mt-2 pl-2 pr-2 pt-1">
                {sortedLessons.map((lesson, index) => (
                    <LessonCard key={index} lesson={lesson} useColor={useColor} subjectName={lesson.disciplina?.nome||subjectName} subjectImage={subjectImage} />
                ))}
            </div>
        </div>
    );
}