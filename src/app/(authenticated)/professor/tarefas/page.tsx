import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Dashboard } from "@/components/Dashboard";
import { ShowProfessorTasks } from "@/components/ShowProfessorTasks";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export interface tarefasProfessor{
  id: string;
  nomeDisciplina: string;
  totalAlunosDisponiveis: number;
  alunosResponderam: number;
  nome: string;
  prazo: Date;
  cor: string;
  urlImagem: string;
  disciplinaId: string;

}

export default async function tarefas(){
    const session = await getServerSession(nextAuthOptions);
    if(session?.papel !== "PROFESSOR"){
      redirect('/');
    }
    const atividesResponse =  await axios.get(`${process.env.BASE_URL}/api/atividades/professor`,{
        headers: {
          'idUser': session?.id ,
        },
      });
      const atividades: tarefasProfessor[] = atividesResponse.data;
    return(
        <Dashboard>
          {atividades ? <ShowProfessorTasks atividades={atividades!}/>:
            <div>Nenhuma atividade encontrada</div>

          }
    
        </Dashboard>
    )
}