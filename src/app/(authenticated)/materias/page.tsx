import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Dashboard } from "@/components/Dashboard";
import { ShowSubjects } from "@/components/ShowSubjects";
import { TitleDashBoard } from "@/components/TitleDashboard";
import { DisciplinasStudent } from "@/types/typesStudent";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface TurmaProps{
  nome: string;
  materias: DisciplinasStudent[];
}


export default async function Materias() {
  
  
  const session = await getServerSession(nextAuthOptions);
  if(session!.papel !== "ALUNO"){
      redirect('/');
  }
  try {
    const response = await axios.get(`${process.env.BASE_URL}/api/students/subjects`, {
      headers: {
        'idUser': session?.id,
      },
    });
    const  turma: TurmaProps = response.data;
   
    if (turma) {
    
      return (
        <>
          <Dashboard>
            <TitleDashBoard text={"Matérias"}/>
            <ShowSubjects materias={turma!.materias} />
          </Dashboard>
        </>
      );
    } else {
      return (
        <>
          <Dashboard>
            <div className="mb-3 flex w-full justify-between ">
              <h2 className="text-3xl font-semibold text-primary-700 dark:text-white">
                Matérias não encontradas
              </h2>
            </div>
          </Dashboard>
        </>
      );
    }
  } catch (error) {
    console.error(error);
    return (
      <>
        <Dashboard>
          <div className="mb-3 flex w-full justify-between ">
            <h2 className="text-3xl font-semibold text-primary-700 dark:text-white">
              Ocorreu um erro ao obter as matérias
            </h2>
          </div>
        </Dashboard>
      </>
    );
  }
}
