
import { Materias } from "@/app/(authenticated)/materias/page";
import { SubjectCard } from "./SubjectCard";

interface MateriasProps{
  materias: Materias[];
}
export function ShowSubjects({materias}: MateriasProps) {
  

  return (
    <section className="flex flex-wrap justify-center gap-8 py-10">
      {materias && materias.map((materia) => (
        <SubjectCard key={materia.id} materia={materia} />
      ))}
    </section>
  );
}
