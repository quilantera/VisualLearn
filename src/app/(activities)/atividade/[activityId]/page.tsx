"use client"
import { ActivityHeader } from "@/components/ActivityHeader";
import { DashboardActivities } from "@/components/DashboardActivities";
import { perguntasAreasPerimetros } from "@/utils/perguntasAreasPerimetros";
import { bancoDeTasks } from "@/utils/tasks";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const handleConfirmar = () => {
    router.back();
  };
  return (
    <>
      <ActivityHeader handleConfirmar={handleConfirmar}/>
      <DashboardActivities
        nomeAtividade={atividade!.titulo}
        perguntas={perguntasAreasPerimetros}
      />
    </>
  );
}
