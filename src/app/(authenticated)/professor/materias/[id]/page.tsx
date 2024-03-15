import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Dashboard } from "@/components/Dashboard";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { TitleDashBoard } from "@/components/TitleDashboard";

import { DashboardContainer } from "@/components/DashboardContainer";
import { DisciplinasTeacher } from "@/types/typesTeacher";
import { Suspense } from "react";
import { LessonsTeacherContainer } from "@/components/LessonsTeacherContainer";
import { StudentsTeacherContainer } from "@/components/StudentsTeacherContainer";

export default async function MateriaProfessorPage({
    params,
  }: {
    params: { id: string };
  }){
    const session = await getServerSession(nextAuthOptions);
    if(session?.papel !== "PROFESSOR"){
      redirect('/');
  }
 const professorId = session.id; 
 console.log("page"+professorId);
    const subjectResponse = await axios.get(`${process.env.BASE_URL}/api/teachers/subjects/${params?.id}`, {
        headers: {
          'idUser': session?.id,
        },
      }); 
      const subject: DisciplinasTeacher  = subjectResponse.data;
  
        return(
       <Dashboard>
        <div className="w-full flex gap-4 items-center ">
            <img  className=" rounded-full shadow-lg border-2 border-slate-300 h-32 " src={subject.urlImagem}/>
            <div className="w-full flex flex-col gap-2 ">
                <TitleDashBoard text={`${subject.nome}  - ${subject.turmas[0].nome}`} weight="medium" />
                
            </div>
          
        </div>
        <Link  className="bg-green-700  dark:border-2 dark:border-green-700 dark:bg-gray-900 w-fit flex gap-4 px-3 py-2 rounded mt-4 mr-4 hover:bg-green-800 hover:scale-[1.01] duration-300  self-end text-slate-50" href={`/atividade/criar/${subject.id}`}>
          criar atividade <PlusCircle/>
        </Link>
        
       <DashboardContainer 
        children1={
          
            <Suspense fallback={<h2>Carregando...</h2>}>
                <LessonsTeacherContainer  subjectId={subject.id} sessionId={professorId}/>
            </Suspense>
            }
        children2 ={
          <Suspense fallback={<h2>Carregando...</h2>}>
          <StudentsTeacherContainer  subjectId={subject.id} sessionId={professorId} />
          </Suspense>
        }/>
        
      </Dashboard>
    )
}