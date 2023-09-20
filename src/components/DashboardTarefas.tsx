import { ShowTasks } from "./ShowTasks";
import { bancoDeTasks } from "@/utils/tasks";
export function DashboardTarefas() {
  return (
    <section
      className={`mt-4 flex w-[90%] flex-col items-center justify-center pt-14 dark:bg-gray-800 dark:text-white`}
    >
      <div className="mb-3 flex w-full justify-between px-2">
        <h2 className="text-3xl font-semibold text-primary-700 dark:text-white">
          Tarefas
        </h2>
      </div>
      <ShowTasks tasks={bancoDeTasks} />
    </section>
  );
}
