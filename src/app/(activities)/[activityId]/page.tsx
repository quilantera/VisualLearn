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
export  default async function AtividadesPage({
  params,
}: {
  params: { activityId: string };
}) {
  const  atividade = await bancoDeTasks.find(
    (atividade) => atividade.id === params.activityId,
  );
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
