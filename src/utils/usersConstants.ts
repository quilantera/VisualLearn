// userConstants.ts
interface NavigationLinks {
    icon: string;
    name: string;
    route: string;
  }
export const studentMenuItems : NavigationLinks[]= [
    {
      name: "Página Inicial",
      route: "/",
      icon: "Monitor"
    },
    {
      name: "Matérias",
      route: "/materias",
      icon: "BookOpen"
    },
    {
      name: "Atividades",
      route: "/tarefas",
      icon: "NotebookPen"
    },
    {
      name: "Perfil",
      route: "/perfil",
      icon: "User"
    }
  ];
  
  export const teacherMenuItems : NavigationLinks[]= [
    {
      name: "Página Inicial",
      route: "/",
      icon: "Monitor"
    },
    {
      name: "Matérias",
      route: "/professor/materias",
      icon: "BookOpen"
    },
    {
      name: "Atividades",
      route: "/professor/tarefas",
      icon: "NotebookPen"
    },
    {
      name: "Alunos",
      route: "/professor/alunos",
      icon: "Users2Icon"
    },
    {
      name: "Perfil",
      route: "/perfil",
      icon: "User"
    }
  ];
  
  export const coordinatorMenuItems : NavigationLinks[] = [
    {
      name: "Página Inicial",
      route: "/",
      icon: "Monitor"
    },
    {
      name: "Turmas",
      route: "/coordenador/turmas",
      icon: "BookOpen"
    },
    {
      name: "Matérias",
      route: "/coordenador/materias",
      icon: "BookOpen"
    },
    {
      name: "Usuários",
      route: "/coordenador/usuarios",
      icon: "NotebookPen"
    },
    {
      name: "Perfil",
      route: "/perfil",
      icon: "User"
    }
  ];
  