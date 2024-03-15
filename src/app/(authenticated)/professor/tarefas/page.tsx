import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Dashboard } from "@/components/Dashboard";
import { LessonsListTeacher } from "@/components/LessonListTeacher";
import { TitleDashBoard } from "@/components/TitleDashboard";
import { AtividadeTeacher } from "@/types/typesTeacher";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";



export default async function tarefas(){
    const session = await getServerSession(nextAuthOptions);
    if(session?.papel !== "PROFESSOR"){
      redirect('/');
    }
    const lessonsResponse =  await axios.get(`${process.env.BASE_URL}/api/teachers/lessons`,{
        headers: {
          'idUser': session?.id ,
        },
      });
      const lessons: AtividadeTeacher[] = lessonsResponse.data;
    return(
        <Dashboard>
          <div className="w-full pb-10">
            <TitleDashBoard text="Atividades"/>

          </div>
          {lessons ? <LessonsListTeacher lessons={lessons!} useColor={true} showImage={true} />:
            <div>Nenhuma atividade encontrada</div>

          }
    
        </Dashboard>
    )
}