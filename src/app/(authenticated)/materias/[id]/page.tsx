import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Dashboard } from "@/components/Dashboard";
import { LessonsList } from "@/components/LessonList";
import { RefreshContentToSpeak } from "@/components/RefreshContentToSpeak";
import { TitleDashBoard } from "@/components/TitleDashboard";
import { AtividadeStudent, DisciplinasStudent } from "@/types/typesStudent";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function MateriaPage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(nextAuthOptions);
  if (session?.papel !== "ALUNO") {
    redirect('/');
  }
  const subjectResponse = await axios.get(`${process.env.BASE_URL}/api/students/subjects/${params.id}`, {
    headers: {
      'idUser': session?.id,
    },
  });
  const subject: DisciplinasStudent = subjectResponse.data;
  const lessonsResponse = await axios.get(`${process.env.BASE_URL}/api/students/subjects/${params.id}/lessons`, {
    headers: {
      'idUser': session?.id,
    },
  });
  const lessons : AtividadeStudent[] =  lessonsResponse.data;

  return (
    <>
      <Dashboard >
        <div  tabIndex={0} className="w-full flex gap-4  sm:gap-2 items-center pb-4 sm:pb-10  ">
            <img  className=" rounded-full shadow-lg border-2 border-slate-300 h-32 sm:h-20 " src={subject.urlImagem} alt={subjsect.nome || "imagem disciplina"}/>
            <div className="w-full flex flex-col gap-2 sm:gap-0 ">
                <TitleDashBoard text={`${subject.nome} `} size={5} weight="medium" />
                <TitleDashBoard text={`Professor: ${subject.professor?.nome}`} size={3} color={"slate"} weight="base"/>   
            </div>
            
        </div>
        { lessons &&
          <LessonsList subjectName={subject.nome} subjectImage={subject.urlImagem} lessons={lessons} lessonsHeaderNames={["prazo","status","nota"]}/>
        }
      </Dashboard >
      <RefreshContentToSpeak/>
    </>
  );
}
