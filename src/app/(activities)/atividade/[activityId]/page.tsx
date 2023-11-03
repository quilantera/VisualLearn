
import { ActivityHeader } from "@/components/ActivityHeader";
import { DashboardActivities } from "@/components/DashboardActivities";
import { pergunta, Atividade, Questoes } from "@/utils/perguntasAreasPerimetros";
export  default async function AtividadesPage({
  params,
}: {
  params: { activityId: string };
}) {
 
  const response = await fetch(`${process.env.BASE_URL!}/api/atividades/${params.activityId}`)
  const atividade: Atividade = await response.json();
  return (
    <>
      <ActivityHeader />
      <DashboardActivities
        nomeAtividade={atividade!.nome}
        perguntas={atividade!.questoes}
      />
    </>
  );
}
