import { ActivityHeader } from "@/components/ActivityHeader";
import { DashboardActivities } from "@/components/DashboardActivities";
import { perguntasAreasPerimetros } from "@/utils/perguntasAreasPerimetros";
import { bancoDeTasks } from "@/utils/tasks";

export interface Pergunta {
  pergunta: string;
  urlImage?: string;
  descricaoImagem?: string;
  respostas: string[];
  respostaCorreta: number;
  // Campo opcional para URL da imagem
}
export interface Perguntas {
  perguntas: Pergunta[];
}
export  default function AtividadesPage({
  params,
}: {
  params: { activityId: string };
}) {
  const  atividade = bancoDeTasks.find(
    (atividade) => atividade.id === params.activityId,
  );
  const colors= "bg-[#7f1d1d] bg-[#082f49] bg-[#ca8a04] bg-[#14532d] bg-[#134e4a] bg-[#c2410c]"
  
  return (
    <>
      <ActivityHeader />
      <DashboardActivities
        nomeAtividade={atividade!.titulo}
        perguntas={perguntasAreasPerimetros}
      />
    </>
  );
}
