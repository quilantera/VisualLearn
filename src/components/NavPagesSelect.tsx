"use client"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { BookOpen, User, Monitor, Users, CalendarDays, NotebookPen, Users2Icon } from "lucide-react";
import { useEffect, useState } from 'react';
interface NavigationLinks {
  icon: string;
  name: string;
  route: string;
}

interface NavigationMenuProps {
  userRole: string;
  navigationLinks: NavigationLinks[];
}
export function NavPagesSelect( {navigationLinks, userRole}: NavigationMenuProps){
  const [pathname, setPathname] = useState<string>(''); // Estado para armazenar o pathname
  const path = usePathname() || '/'; // Obtém o caminho atual

  useEffect(() => {
    // Atualiza o pathname com base no userRole
    switch (userRole) {
      case "ALUNO":
        setPathname(path.includes("/materias") ? "/materias" : path);
        break;
      case "PROFESSOR":
        setPathname(path.includes("/professor/materias") ? "/professor/materias" : 
                    path.includes("/professor/tarefas") ? "/professor/tarefas" : path);
        break;
      default:
        setPathname(path);
        break;
    }
  }, [userRole, path]); // Executa sempre que userRole ou path mudar

  function selectIcon(iconName: string) {
    // Mapeamento dos nomes dos ícones para os ícones importados do Lucide Icons
    const iconMap: { [key: string]: JSX.Element } = {
      BookOpen: <BookOpen aria-hidden="true" />,
      User: <User aria-hidden="true" />,
      Monitor: <Monitor aria-hidden="true"/>,
      Users: <Users aria-hidden="true"/>,
      CalendarDays: <CalendarDays aria-hidden="true"/>,
      NotebookPen: <NotebookPen aria-hidden="true"/>,
      Users2Icon: <Users2Icon aria-hidden="true"/>
      // Adicione mais mapeamentos conforme necessário
    };
  
    // Verifica se o ícone solicitado está presente no mapeamento
    if (iconName in iconMap) {
      return iconMap[iconName];
    } else {
      // Se o ícone não for encontrado, você pode retornar um ícone padrão ou null, dependendo do seu requisito
      return null; // ou retorne um ícone padrão alternativo
    }
  }


  return (

      <NavigationMenu.Root orientation="vertical" >
    <NavigationMenu.List  className='flex flex-col gap-3 '>
      {navigationLinks.map((link) => {
         return( 
         <NavigationMenu.Item className="flex relative" key={link.name} >
          <Link 
            href={link.route} 
            title={`Selecione`+link.name}
            className={`w-full flex items-center text-slate-600  dark:tracking-wide text-lg gap-1 py-4 pl-3 pr-5 rounded-lg mt-1 font-medium  duration-100 ${(pathname === link.route) ? ' right-[-10px] bg-violet-950 dark:bg-slate-50 dark:font-bold  text-white dark:text-gray-900' : 'hover:bg-violet-800 hover:text-white dark:text-sky-300 dark:hover:text-white'}`}
            style={{ whiteSpace: 'nowrap' }}
            >
                {selectIcon(link.icon)}{link.name}

            </Link>
          </NavigationMenu.Item>
          )
      })}
     
    </NavigationMenu.List>
  </NavigationMenu.Root>

  );
}

