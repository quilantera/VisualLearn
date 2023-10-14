import { Dashboard } from "@/components/Dashboard";

import tarefa from "../../assets/5800_9_04.jpg"
import Materia from "../../assets/3700_1_03.jpg"

import { PrimeiroCard } from "@/components/PrimeiroCard";
import CardComponent from "@/components/CardComponent";

export default function Home() {
  
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
