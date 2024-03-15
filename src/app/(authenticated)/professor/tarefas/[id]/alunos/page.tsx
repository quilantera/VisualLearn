import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { ButtonLink } from "@/components/ButtonLink";
import { Dashboard } from "@/components/Dashboard";
import { LessonsListTeacher } from "@/components/LessonListTeacher";
import { StudentList } from "@/components/StudentsList";
import { TitleDashBoard } from "@/components/TitleDashboard";
import { AtividadeTeacher } from "@/types/typesTeacher";
import axios from "axios";
import { getServerSession } from "next-auth";

export  default async function Alunos({
    params,
  }: {
    params: { id: string };
  }){
    const session = await getServerSession(nextAuthOptions);
    const lessonResponse = await axios.get(`${process.env.BASE_URL}/api/teachers/lessons/${params.id}`,{
        headers: {
            'idUser': session?.id,
        },
    })
    const lesson: AtividadeTeacher = lessonResponse.data;
    return (
    <Dashboard>
        <div className="w-full flex gap-4 items-center pb-4 ">
            <img  className=" rounded-full shadow-lg border-2 border-slate-300 h-24 " src={lesson.urlImagem}/>
            <div className="w-full flex flex-col gap-2 ">
                <TitleDashBoard text={`${lesson.nomeDisciplina}  - ${lesson.nomeTurma}`} size={4} weight="medium" />
                <TitleDashBoard text={`Atividade:    ${lesson.nome}`} size={2} color={"slate"} weight="base"/>   
            </div>
            
        </div>
        <div className="w-full flex flex-col gap-3 pl-5 h-full">

                <StudentList lessons={lesson.atividadesAluno!} deadLine={lesson.prazo} />  
        </div>
        <div className="w-full ">
            <ButtonLink linkUrl={`/atividade/${lesson.id}`} linkText="Ver Atividade"/>
        </div>
    </Dashboard>)
  }