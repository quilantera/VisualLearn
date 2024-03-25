import { Dashboard } from "@/components/Dashboard";

import Tarefa from "@/assets/astronauta-escrevendo.png"
import Materia from "@/assets/astronauta-lendo-livro2.png"
import Perfil from "@/assets/astronauta_voando.png";

import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";

import { TitleDashBoard } from "@/components/TitleDashboard";
import Image from "next/image";
import Link from "next/link";
export default async function Home(){
  const session = await getServerSession(nextAuthOptions);

  const actionsAluno = [{
    text: " Disciplinas",
    ariaLabel: "Selecionar Matérias",
    image: Materia,
    linkUrl: "/materias"
  }, {
    text: "Atividades",
    ariaLabel: "Selecionar Atividades",
    image: Tarefa,
    linkUrl: "/tarefas"
  }, {
    text: "Perfil",
    ariaLabel: "Selecionar Perfil",
    image: Perfil,
    linkUrl: "/perfil"
  }]
  const actionsProfessor = [{
    text: "Disciplinas",
    ariaLabel: "Selecionar Matérias",
    image: Materia,
    linkUrl: "/professor/materias"
  }, {
    text: "Atividades",
    ariaLabel: "Selecionar Atividades",
    image: Tarefa,
    linkUrl: "/professor/tarefas"
  }, {
    text: "Perfil",
    ariaLabel: "Selecionar Perfil",
    image: Perfil,
    linkUrl: "/professor/perfil"
  }]
  const ActionCards = ()=> {
    const actions = session?.papel === "ALUNO" ? actionsAluno : actionsProfessor;

    return actions.map((action, index) => (
      <Link key={index}href={action.linkUrl} aria-label="Ir para " className="min-w-[22vw] w-[14rem] border-2 gap-3 border-slate-400 text-violet-950 hover:bg-violet-950 hover:text-slate-50 rounded-lg shadow-lg px-[32px] py-[16px] flex flex-col items-center justify-center text-center hover:translate-y-[-10px] hover:scale-105 duration-500 dark:border-slate-50 dark:text-slate-50 dark:bg-gray-800 dark:hover:bg-slate-200 dark:hover:text-gray-900">
        <Image src={action.image} alt={action.ariaLabel} className="h-32 w-32" height={200} width={200}/>
      <h2 className="font-medium  text-3xl text-shadow w-full  "> {action.text} </h2>
      </Link>
    ));
  }
  return (
  
      <Dashboard >
        <TitleDashBoard text="Página Inicial"/>
       <div className="flex flex-wrap gap-[24px] justify-center pt-10"> 
       {ActionCards()}
       
        </div>
    </Dashboard>
  )
}
