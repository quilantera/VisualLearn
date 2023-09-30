
import { SubjectCard } from "./SubjectCard";

export interface Subject {
  id: number;
  nome: string;
  professor: string;
  nomeURL: string;
  cor?: string;
}

interface ShowSubjectsProps {
  subjects: Subject[];
}

export function ShowSubjects({ subjects }: ShowSubjectsProps) {
  
  return (
    <section className="flex flex-wrap justify-center gap-8 py-10">
      {subjects.map((subject) => (
        <SubjectCard key={subject.id} subject={subject} />
      ))}
    </section>
  );
}
