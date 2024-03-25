"use client"
import { LessonCard } from "./LessonCard";
import { SortDropdown } from "./SortDropDown";
import { useState } from "react";
import { AtividadeStudent } from "@/types/typesStudent";
import { useAccessibility } from "@/app/Context/AccessibilityContext";

interface ShowLessonsProps {
    subjectName?: string;
    subjectImage?: string;
    lessons: AtividadeStudent[];
    lessonsHeaderNames: string[];
    useColor?: boolean;
}

export function LessonsList({ subjectName ="undefined", lessons, subjectImage,useColor = false, lessonsHeaderNames }: ShowLessonsProps) {
    const {setIsReady, isReady} = useAccessibility();
    const [sortedLessons, setSortedLessons] = useState<AtividadeStudent[]>(lessons);
    setIsReady(!isReady);
    const handleSortChange = (sortedData: AtividadeStudent[]) => {
        setSortedLessons(sortedData);
        setIsReady(!isReady);
    };

    const sortOptions = [
        { label: "Nome da atividade", value: "nome" },
        { label: "Prazo", value: "prazo" },
        { label: "Status", value: "status" },
    ];
    return (
        <div className="  h-full min-h-[90vh] flex flex-col sm:px-[0px]">
            <div className="flex justify-end pb-2 ">
                <SortDropdown options={sortOptions} data={lessons} onChange={handleSortChange} />

            </div>
         
            
            <div className="flex  flex-wrap justify-center items-center gap-[2vw]  mt-2 pl-2 pr-2 pt-1 ">
                {sortedLessons.map((lesson, index) => (
                    <LessonCard key={index} lesson={lesson} useColor={useColor} subjectName={lesson.disciplina?.nome||subjectName} subjectImage={subjectImage} />
                ))}
            </div>
        </div>
    );
}