import { TaskCard } from "./TaskCard";

interface Task {
  id: string;
  materia: string;
  titulo: string;
  prazo: string;
  status: "atraso" | "pendente" | "entregue";
  link: string;
  foto: string;
  cor?: string;
}

interface ShowTasksProps {
  tasks: Task[];
}
export function ShowTasks({ tasks }: ShowTasksProps) {
  return (
    <div className="scrollbar mt-5 max-h-[420px] w-full overflow-y-scroll px-5">
      <div className="flex flex-col gap-4 py-4 ">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
}
