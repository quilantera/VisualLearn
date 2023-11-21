import { Dashboard } from "@/components/Dashboard";

import tarefa from "../../assets/5800_9_04.jpg"
import Materia from "../../assets/3700_1_03.jpg"

import { PrimeiroCard } from "@/components/PrimeiroCard";
import CardComponent from "@/components/CardComponent";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(nextAuthOptions);

  if(session!.papel === "ALUNO"){
  return (
    <>
    
      <Dashboard >
        <PrimeiroCard/>
        <div className="w-full flex gap-10 mt-5 justify-center">
          <CardComponent
            ariaLabel="Seção de Tarefas"
            title="Tarefas"
            imageSrc={tarefa}
            linkHref="/tarefas"
            buttonText="Iniciar"
          />
          <CardComponent
            ariaLabel="Seção de Matérias"
            title="Matérias"
            imageSrc={Materia}
            linkHref="/materias"
            buttonText="Iniciar"
          />
        </div>
      </Dashboard>
  
    </>
  );
  }
  else if(session!.papel === "PROFESSOR"){
    return( 
      <Dashboard>
      <PrimeiroCard/>
        <div className="w-full flex gap-10 mt-5 justify-center">
          <CardComponent
            ariaLabel="Seção de Matérias"
            title="Disciplinas"
            imageSrc={tarefa}
            linkHref="/professor/materias"
            buttonText="Iniciar"
          />
          <CardComponent
            ariaLabel="Seção de Tarefas"
            title="Tarefas"
            imageSrc={Materia}
            linkHref="/professor/tarefas"
            buttonText="Iniciar"
          />
        </div>
      </Dashboard>
    
    )
  }
 else if(session!.papel === "COORDENADOR"){
  return(<div>bem vindo {session?.name}</div>)
 }
}
