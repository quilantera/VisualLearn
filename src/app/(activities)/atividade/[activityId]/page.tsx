
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { ActivityHeader } from "@/components/ActivityHeader";
import { DashboardActivities } from "@/components/DashboardActivities";
import { Atividade } from "@/utils/perguntasAreasPerimetros";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export  default async function AtividadesPage({
  params,
}: {
  params: { activityId: string };
}) {
  const session = await getServerSession(nextAuthOptions);
  if(session?.papel !== "ALUNO"){
    redirect('/');
 }
  const atividadeId = params.activityId;
  const response = await axios.get(`${process.env.BASE_URL!}/api/atividades/${atividadeId}`)
  const atividade: Atividade = await response.data;
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
