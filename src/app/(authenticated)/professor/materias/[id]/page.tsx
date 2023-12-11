import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Dashboard } from "@/components/Dashboard";
import { Atividade, DisciplinasProfessor, Turma} from "@/types/typesBanco";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { DashboardContainer } from "@/components/DashboardContainer";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

export default async function MateriaProfessorPage({
    params,
  }: {
    params: { id: string };
  }){
    const session = await getServerSession(nextAuthOptions);
  if(session?.papel !== "PROFESSOR"){
    redirect('/');
 }
    const response = await axios.get(`${process.env.BASE_URL}/api/materias/professor/${params?.id}`, {
        headers: {
          'idUser': session?.id,
        },
      }); 
      const disciplina: DisciplinasProfessor = response.data;
      const turma: Turma = disciplina.turmas![0];
      const atividades: Atividade[] = disciplina.atividades!;
      atividades!.forEach((tarefa) => {
        tarefa.alunosResponderam = tarefa.atividadesAluno!.reduce(
          (total, atividadeAluno) => (atividadeAluno.dataEntrega != null ? total + 1 : total),
          0
        );
        tarefa.totalAlunos = tarefa.atividadesAluno?.length;
      });
  
    return(
       <Dashboard>
        <div
        tabIndex={0}
        className={`flex  w-full flex-col justify-center gap-2 rounded-xl ${disciplina?.cor ? disciplina?.cor : 'bg-primary-500'} px-8 py-5 shadow-md dark:bg-gray-900 `}>
        <div className="flex gap-1">
            <h2 className="w-fit break-words bg-black bg-opacity-70 px-2 py-1 text-2xl font-semibold tracking-[1px]  text-white">
              {turma.nome||'6 ano'}
            </h2>
            <h2 className="w-fit break-words bg-black bg-opacity-70 px-2 py-1 text-2xl font-semibold tracking-[1px]  text-white">
              {disciplina?.nome}
            </h2>
        </div>
          <h3 className="w-fit bg-black bg-opacity-70 px-2 py-1 text-xl font-normal tracking-[1px] text-white">
            Professor: {disciplina.professor?.nome}
          </h3>
        </div>
        <Link  className="bg-green-700 w-fit flex gap-4 px-3 py-2 rounded mt-4 mr-4 hover:bg-green-800 hover:scale-[1.01] duration-300  self-end text-slate-50" href={`/atividade/criar/${disciplina.id}`}>
          criar atividade <PlusCircle/>
        </Link>
        <DashboardContainer 
          atividades={atividades} 
          nomeDisciplina={disciplina.nome} 
          alunos={turma.alunos!} 
           />
        </Dashboard>
    )
}