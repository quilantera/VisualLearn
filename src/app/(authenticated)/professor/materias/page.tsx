import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Dashboard } from "@/components/Dashboard";
import { ShowSubjects } from "@/components/ShowSubjects";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export interface Materias {
    id: string;
    nome: string;
    cor: string;
    urlImagem: string;
    professorId: string;
}

export default async function Materias(){
    const session = await getServerSession(nextAuthOptions);
    if(session?.papel !== "PROFESSOR"){
      redirect('/');
    }
    
    try {
        const response = await axios.get(`${process.env.BASE_URL}/api/materias/professor`, {
          headers: {
            'idUser': session?.id,
          },
        });
        const materias: Materias[]= response.data;
    
        if (materias) {
        
          return (
            <>
              <Dashboard>
                <div className="mb-3 flex w-full justify-between ">
                  <h2 className="text-3xl font-semibold text-primary-700 dark:text-white">
                    Matérias
                  </h2>
                 
                </div>
                <ShowSubjects materias={materias} />
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