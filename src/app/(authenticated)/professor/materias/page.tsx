import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Dashboard } from "@/components/Dashboard";
import { ShowSubjects } from "@/components/ShowSubjects";
import { TitleDashBoard } from "@/components/TitleDashboard";
import { DisciplinasTeacher } from "@/types/typesTeacher";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function Materias(){
    const session = await getServerSession(nextAuthOptions);
    if(session?.papel !== "PROFESSOR"){
      redirect('/');
    }
    
    try {
        const response = await axios.get(`${process.env.BASE_URL}/api/teachers/subjects`, {
          headers: {
            'idUser': session?.id,
          },
        });
        const materias: DisciplinasTeacher[]= response.data;
    
        if (materias) {
       
          return (
            <>
              <Dashboard>
              <TitleDashBoard text="Suas Matérias"/>
                <ShowSubjects materias={materias} />
              </Dashboard>
            </>
          );
        } else {
          return (
            <>
              <Dashboard>
              <TitleDashBoard text="Matérias não encontradas"/>
              </Dashboard>
            </>
          );
        }
      } catch (error) {
        console.error(error);
        return (
          <>
            <Dashboard>
            <TitleDashBoard text="Erro ao buscar as matérias, por favor, entrar novamente"/>
            </Dashboard>
          </>
        );
      }
}