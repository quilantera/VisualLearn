import { Atividade } from "@/types/typesBanco";
import { TaskCard } from "./TaskCard";

interface TaskCardProps {
  atividades: Atividade[];
}

export function ShowTasks({ atividades }:TaskCardProps){
  return (
    <div className="scrollbar mt-5 max-h-[420px] w-full overflow-y-scroll px-5">
      <div className="flex flex-col gap-4 py-4 ">
        {atividades.map((atividade, index) => (
          <TaskCard key={index} atividade={atividade} materiaNome={atividade.disciplina!.nome} />
        ))}
      </div>
    </div>
  );
}
