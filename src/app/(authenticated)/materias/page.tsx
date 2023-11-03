import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Dashboard } from "@/components/Dashboard";
import { ShowSubjects } from "@/components/ShowSubjects";
import axios from "axios";
import { getServerSession } from "next-auth";

interface TurmaProps{
  nome: string;
  materias: Materias[];
}
export interface Materias {
    id: string;
    nome: string;
    cor: string;
    urlImagem: string;
    professorId: string;
    professor: NomeProfessor;
}
interface NomeProfessor{
  nome: string;
}
export default async function Materias() {
  
  try {
    const session = await getServerSession(nextAuthOptions);
    const response = await axios.get(`${process.env.BASE_URL}/api/materias`, {
      headers: {
        'idUser': session?.id,
      },
    });
    const  turma: TurmaProps = response.data;

    if (turma) {
    
      return (
        <>
          <Dashboard>
            <div className="mb-3 flex w-full justify-between ">
              <h2 className="text-3xl font-semibold text-primary-700 dark:text-white">
                Matérias
              </h2>
              <h2 className="text-3xl font-semibold text-primary-700 dark:text-white ">
               {turma!.nome}
              </h2>
            </div>
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
