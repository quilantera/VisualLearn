
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { DashboardActivities } from "@/components/DashboardActivities";
import { QuestoesAtividadeStudent } from "@/types/typesStudent";
import { InterpretacaoDeTexto } from "@/utils/interpretacaoDeTexto";
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
  const response = await axios.get(`${process.env.BASE_URL!}/api/students/lessons/${atividadeId}`)
  const atividade: QuestoesAtividadeStudent = await response.data;

  return (
    <>
      <DashboardActivities
        nomeAtividade={atividade!.nome}
        perguntas={atividade!.questoes}
        idAtividade={atividadeId!} 
        session={session!.id}     
      />
    </>
  );
}
