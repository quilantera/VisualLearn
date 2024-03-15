
import { DisciplinasTeacher } from "@/types/typesTeacher";
import { SubjectCard } from "./SubjectCard";
import { DisciplinasStudent } from "@/types/typesStudent";
import { Suspense } from "react";
interface MateriasProps{
  materias: DisciplinasStudent[]| DisciplinasTeacher [];
}
export function ShowSubjects({materias}: MateriasProps) {
  return (
    <section className="flex flex-wrap justify-center gap-6 py-4">

      {materias && materias.map((materia) => (
       materia.turmas?
         <SubjectCard key={materia.id} materia={materia}  nameClass={materia.turmas[0]?.nome}/> :
         <SubjectCard key={materia.id} materia={materia}/>

      ))}
    </section>
  );
}
