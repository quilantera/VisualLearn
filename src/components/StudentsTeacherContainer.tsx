"use client";
import { useState, useEffect } from "react";
import { AlunosPorDisciplinaTeacher } from "@/types/typesTeacher";
import axios from "axios";
import { ListStudents } from "./ListStudents";
import { SyncLoader } from "react-spinners";

interface StudentsTeacherContainerProps {
  subjectId: string;
  sessionId: string;
}

export function StudentsTeacherContainer({ subjectId, sessionId }: StudentsTeacherContainerProps) {
  const [students, setStudents] = useState<AlunosPorDisciplinaTeacher[]>([]);
  const [totalLessons, setTotalLessons] = useState<number>(0);
  const [loading, setLoading] = useState(true);
    console.log(subjectId, sessionId)
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/teachers/subjects/${subjectId}/students`, {
        headers: {
          'idUser': sessionId,
        },
      })
      .then(response => {
        const studentsData: AlunosPorDisciplinaTeacher[] = response.data;
        setStudents(studentsData);
        if (studentsData.length > 0) {
          const firstStudent = studentsData[0];
          setTotalLessons(firstStudent.atividadesAluno.length);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao carregar os alunos da disciplina:", error);
        setLoading(false);
      });
  }, [subjectId, sessionId]);
  if(loading){
    return (<div className="flex gap-2 items-center" ><h3>carregando</h3> <SyncLoader size={8} color="#370a5c"/></div> )
  }
  return <ListStudents students={students} totalLessons={totalLessons} />;
}
