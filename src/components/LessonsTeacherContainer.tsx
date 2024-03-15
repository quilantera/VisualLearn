"use client"
import { AtividadeTeacher } from "@/types/typesTeacher";

import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import { LessonsListTeacher } from "./LessonListTeacher";
import { SyncLoader } from "react-spinners";

interface LessonsTeacherContainerProps{
    subjectId: string;
    sessionId: string;
}
export  function LessonsTeacherContainer({subjectId,sessionId}: LessonsTeacherContainerProps){
   
    const [lessons, setLessons] = useState<AtividadeTeacher[]>([]);
    const [loading, setLoading] = useState(true);
    console.log("id materia: "+ subjectId+ "id profssor: "+sessionId)
    useEffect(() => {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/teachers/subjects/${subjectId}/lessons`, {
          headers: {
            'idUser': sessionId,
          },
        })
        .then(response => {
          setLessons(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Erro ao carregar as lições do professor:", error);
          setLoading(false);
        });
    }, [subjectId, sessionId]);
    if(loading){
        return (<div className="flex gap-2 items-center" ><h3>carregando</h3> <SyncLoader size={8} color="#370a5c"/></div> )
      }
      return (
        <LessonsListTeacher lessons={lessons} useColor={false} showImage={true} />
      );
}