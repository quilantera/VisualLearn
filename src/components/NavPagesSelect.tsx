"use client"
import { Book, Home, Pencil } from "lucide-react";
import Link from "next/link";

export function NavPagesSelect(){


  return (
    <nav className="w-full" role="navigation" aria-label="menu de navegação" >
      <ul className="flex flex-col"  role="menu" >
        <li className="border-b-2 flex justify-center hover:bg-primary-6  hover:bg-primary-600 focus:bg-primary-600 dark:bg-gray-700 dark:hover:bg-slate-50 duration-300">
          <Link 
          href="/" 
          title="Selecione Painel" 
          aria-label="Selecione Painel" 
          className="nav-link flex flex-col  w-11/12 self-center items-center gap-1 px-3 py-4 text-base font-medium text-slate-100 dark:hover:text-gray-70 " 
          tabIndex={0}
          role="menuitem"
          >
        
              <Home className="h-6 w-6" data-ignore="true"/> Painel

          </Link>
        </li>
        <li className="border-b-2 flex justify-center hover:bg-primary-600 focus:bg-primary-600 dark:bg-gray-700 dark:hover:bg-slate-50 duration-300">
          <Link 
            href="/materias" 
            title="Selecione Matérias" 
            aria-label="Selecione Matérias" 
            className="nav-link flex flex-col  w-11/12 self-center items-center gap-1 px-3 py-4 text-base font-medium text-slate-100 dark:hover:text-gray-70 " 
            tabIndex={0}
            role="menuitem"
            >
              <Book className="h-6 w-6" data-ignore="true" /> Matérias
         
          </Link>
        </li>
         <li className="border-b-2 flex justify-center hover:bg-primary-600 focus:bg-primary-600 dark:bg-gray-700 dark:hover:bg-slate-50 uration-300">
          <Link href="/tarefas" 
          title="Selecione Tarefas" 
          aria-label="Selecione Tarefas" 
          className="nav-link flex flex-col w-11/12 self-center items-center gap-1 px-3 py-4 text-base font-medium text-slate-100 dark:hover:text-gray-70 " 
          tabIndex={0}
          role="menuitem"
          >
        
              <Pencil className="h-6 w-6" data-ignore="true" /> Tarefas
   
          </Link>
        </li>
      </ul>
    </nav>
  );
}

