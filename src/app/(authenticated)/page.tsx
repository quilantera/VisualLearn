import { Dashboard } from "@/components/Dashboard";

import Tarefa from "@/assets/5800_9_04.jpg"
import Materia from "@/assets/3700_1_03.jpg"
import Perfil from "@/assets/astronauta_voando.jpg";

import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";

import { TitleDashBoard } from "@/components/TitleDashboard";
import { ActionCard } from "@/components/ActionsCard";
import { ButtonLink } from "@/components/ButtonLink";

export default async function Home(){
  const session = await getServerSession(nextAuthOptions);
  new Promise((resolve) =>{ setTimeout(resolve, 30000)})
  const actionsAluno = [{
    text: "Veja as suas Disciplinas",
    ariaLabel: "Selecionar Matérias",
    image: Materia,
    linkUrl: "/materias"
  }, {
    text: "Acompanhe suas Atividades",
    ariaLabel: "Selecionar Atividades",
    image: Tarefa,
    linkUrl: "/tarefas"
  }, {
    text: "Entre no seu perfil",
    ariaLabel: "Selecionar Perfil",
    image: Perfil,
    linkUrl: "/perfil"
  }]
  const actionsProfessor = [{
    text: "Veja as suas Disciplinas",
    ariaLabel: "Selecionar Matérias",
    image: Materia,
    linkUrl: "/professor/materias"
  }, {
    text: "Acompanhe suas Atividades",
    ariaLabel: "Selecionar Atividades",
    image: Tarefa,
    linkUrl: "/professor/tarefas"
  }, {
    text: "Entre no seu perfil",
    ariaLabel: "Selecionar Perfil",
    image: Perfil,
    linkUrl: "/professor/perfil"
  }]
  const ActionCards = ()=> {
    const actions = session?.papel === "ALUNO" ? actionsAluno : actionsProfessor;

    return actions.map((action, index) => (
      <ActionCard.Root key={index} ariaLabel={action.ariaLabel}>
        <ActionCard.Content>
          <ActionCard.Image StaticImageData={action.image} altImage={action.ariaLabel} />
          <TitleDashBoard text={ action.text} size={3} weight="base" />
        </ActionCard.Content>
        <ActionCard.Footer>
          <ButtonLink linkUrl={action.linkUrl} />
        </ActionCard.Footer>
      </ActionCard.Root>
    ));
  }
  return (
  
      <Dashboard >
        <TitleDashBoard text="Página Inicial"/>
       <div className="flex flex-wrap gap-10 justify-center pt-10"> 
       {ActionCards()}
       
        </div>
    </Dashboard>
  )
}
