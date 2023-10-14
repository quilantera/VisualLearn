import { Dashboard } from "@/components/Dashboard";
import { ShowTasks } from "@/components/ShowTasks";
import { bancoDeTasks } from "@/utils/tasks";
export default function Tarefas() {
  return (
    <>
      <Dashboard >
        <div className="mb-3 flex w-full justify-between px-2">
          <h2 className="text-3xl font-semibold text-primary-700 dark:text-white">
            Tarefas
          </h2>
        </div>
        <ShowTasks tasks={bancoDeTasks} />
      </Dashboard>
      
      
    </>
  );
}
