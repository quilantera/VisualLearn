"use client"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';


import Link from 'next/link';

import { Book, Home, Pencil } from "lucide-react";
export function NavPagesSelect(){

 

  return (
      <NavigationMenu.Root orientation="vertical" className="w-full" >
    <NavigationMenu.List >
      <NavigationMenu.Item className="border-b-2 flex justify-center hover:bg-primary-6  hover:bg-primary-600 focus:bg-primary-600 dark:bg-gray-700 dark:hover:bg-slate-50 duration-300">
        <Link 
          href="/" 
          title="Selecione Painel" 
          className="nav-link flex flex-col  w-11/12 self-center items-center gap-1 px-3 py-4 text-base font-medium text-slate-100 dark:hover:text-gray-70 "
          >
              <Home className="h-6 w-6" data-ignore="true"/>Painel

          </Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item className='border-b-2 flex justify-center hover:bg-primary-600 focus:bg-primary-600 dark:bg-gray-700 dark:hover:bg-slate-50 duration-300'>
        <Link  
            title="selecione matérias" 
            href="/materias" 
            className="nav-link flex flex-col  w-11/12 self-center items-center gap-1 px-3 py-4 text-base font-medium text-slate-100 dark:hover:text-gray-70 " 
            >
              <Book className="h-6 w-6" data-ignore="true" /> Matérias
         
          </Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item className='border-b-2 flex justify-center hover:bg-primary-600 focus:bg-primary-600 dark:bg-gray-700 dark:hover:bg-slate-50 duration-300'>
      <Link  
          href="/tarefas" 
          title="Selecione Tarefas"   
          className="nav-link flex flex-col w-11/12 self-center items-center gap-1 px-3 py-4 text-base font-medium text-slate-100 dark:hover:text-gray-70 " 
    
          >
              <Pencil className="h-6 w-6" data-ignore="true" /> Tarefas
   
          </Link>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  </NavigationMenu.Root>

  );
}

