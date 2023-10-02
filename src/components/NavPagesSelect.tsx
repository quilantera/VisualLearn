import { Book, Home, Pencil } from "lucide-react";
import Link from "next/link";

export function NavPagesSelect() {
  return (
    <ul className="w-full">
      <li className=" flex flex-col items-center border-b-2 text-white duration-200 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:text-white dark:hover:bg-white dark:hover:text-gray-800 dark:focus:text-gray-800 ">
        <Link
          href="/"
          title=" Selecione Painel"
          className="flex h-full w-[90%] flex-col items-center justify-center  gap-1 px-2 py-4 text-base font-medium "
        >
          <Home className="h-6 w-6" /> Painel
        </Link>
      </li>
      <li className="flex flex-col items-center border-b-2 text-white duration-200 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:text-white dark:hover:bg-white dark:hover:text-gray-800 dark:focus:text-gray-800 ">
        <Link
          title=" Selecione Matérias"
          href="/materias"
          className="flex h-full  w-[90%] flex-col items-center justify-center  gap-1 px-2 py-4 text-base font-medium "
        >
          <Book className="h-6 w-6" /> Matérias
        </Link>
      </li>
      <li className="flex flex-col items-center border-b-2 text-white duration-200 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:text-white dark:hover:bg-white dark:hover:text-gray-800 dark:focus:text-gray-800 ">
        <Link
          href="/tarefas"
          title=" Selecione Tarefas"
          className=" flex h-full w-[90%] flex-col  items-center justify-center gap-1 px-2 py-4 text-base font-medium"
        >
          <Pencil className="h-6 w-6" /> Tarefas
        </Link>
      </li>
    </ul>
  );
}
