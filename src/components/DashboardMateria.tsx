import { Subject } from "./ShowSubjects";
import { TaskCard } from "./TaskCard";
import { bancoDeTasks } from "@/utils/tasks";

interface DashboardMateriaProps {
  subject: Subject;
}
export function DashboardMateria({ subject }: DashboardMateriaProps) {
  const tasks = bancoDeTasks.filter((task) => task.materia === subject.nome);
  return (
    <section
      className={`mt-4 flex w-[90%] flex-col justify-center pl-4 pt-14 dark:bg-gray-800 dark:text-white `}
    >
      <div
       tabIndex={0}
      className={`flex  w-12/12 flex-col justify-center gap-2 rounded-xl ${subject.cor? subject.cor : 'bg-primary-500'} px-8 py-5 shadow-md dark:bg-gray-900 `}>
        <h2 className="w-fit break-words bg-black bg-opacity-70 px-2 py-1 text-2xl font-semibold tracking-[1px]  text-white">
          6º ano B - {subject.nome}
        </h2>
        <h3 className="w-fit bg-black bg-opacity-70 px-2 py-1 text-xl font-normal tracking-[1px] text-white">
          Professor {subject.professor}
        </h3>
      </div>
      <div className="scrollbar mt-10 h-[320px] w-full overflow-y-scroll rounded bg-zinc-100 p-6 shadow-xl dark:border-2 dark:border-white dark:bg-gray-800">
        <div className="flex flex-col gap-4">
          {tasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </div>
      </div>
    </section>
  );
}
