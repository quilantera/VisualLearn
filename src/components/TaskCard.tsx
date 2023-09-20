import { Task } from "@/utils/tasks";
import Link from "next/link";

interface TaskCardProps {
  task: Task;
}
export function TaskCard({ task }: TaskCardProps) {
  const getStatusColor = () => {
    switch (task.status) {
      case "pendente":
        return "flex items-center justify-center text-yellow-800 border-yellow-800 bg-yellow-200 dark:text-white dark:bg-gray-800 dark:border-4  ";
      case "entregue":
        return " flex items-center justify-center  text-green-800 border-green-800 bg-green-200 dark:text-white dark:bg-gray-800 dark:border-4";
      case "atraso":
      default:
        return "flex items-center justify-center text-red-800 border-red-800 bg-red-200 dark:text-white dark:bg-gray-800 dark:border-4";
    }
  };

  return (
    <div
      aria-label="Card tarefa"
      tabIndex={0}
      className="relative flex w-full items-center justify-between overflow-hidden rounded-lg bg-zinc-50 px-6 py-4 shadow-lg duration-300 hover:scale-[1.02] dark:border-2 dark:border-white dark:bg-gray-900"
    >
      <div className="absolute left-0 h-full w-2 bg-violet-250 dark:bg-slate-300" />
      <div className="flex gap-6">
        <img
          src={task.foto}
          alt={`Imagem para ${task.titulo}`}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="ml-2">
          <h2 className=" text-base font-semibold text-zinc-600 dark:text-white">
            {task.materia}
          </h2>
          <h3 className=" text-lg font-semibold">{task.titulo}</h3>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <h3 className=" text-base font-medium">Prazo: {task.prazo}</h3>
        <h3
          className={`h-[2.2rem] w-[6.2rem] rounded border-2 px-2 py-1 text-center text-base font-medium ${getStatusColor()}`}
        >
          {task.status}
        </h3>
        <Link
          href={`/atividade${task.link}`}
          title="Iniciar Exercício"
          className="rounded bg-primary-400 px-3 py-[0.425rem] font-medium  tracking-[1px] text-zinc-200 duration-300 ease-in-out  hover:bg-blue-900  dark:border-2 dark:border-white dark:bg-gray-800"
        >
          iniciar
        </Link>
      </div>
    </div>
  );
}
