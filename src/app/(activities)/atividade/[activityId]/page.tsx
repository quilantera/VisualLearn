
import { ActivityHeader } from "@/components/ActivityHeader";
import { DashboardActivities } from "@/components/DashboardActivities";
import { Atividade } from "@/utils/perguntasAreasPerimetros";
import axios from "axios";
import { useSession } from "next-auth/react";

export  default async function AtividadesPage({
  params,
}: {
  params: { activityId: string };
}) {
  const atividadeId = params.activityId;
  const response = await axios.get(`${process.env.BASE_URL!}/api/atividades/${atividadeId}`)
  const atividade: Atividade = await response.data;
  const {data: session} = await useSession();
  return (
    <>
      <ActivityHeader />
      <DashboardActivities
        nomeAtividade={atividade!.nome}
        perguntas={atividade!.questoes}
        idAtividade={atividadeId!} 
        session={session!.id}     
      />
    </>
  );
}
