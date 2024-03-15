import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Dashboard } from "@/components/Dashboard";
import { LessonsList } from "@/components/LessonList";
import { TitleDashBoard } from "@/components/TitleDashboard";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default  async function Tarefas() {
  const session = await getServerSession(nextAuthOptions);
  if (session!.papel !== "ALUNO"){
    redirect('/');
 }
  const atividadesResponse =  await axios.get(`${process.env.BASE_URL}/api/students/lessons`,{
    headers: {
      'idUser': session?.id ,
    },
  });
  const atividades = atividadesResponse.data;

  return (
    <>
      <Dashboard >
      
      <TitleDashBoard text="Atividades"/>
        <LessonsList lessons={atividades} useColor={true} lessonsHeaderNames={["prazo","status","notas"]} />
      </Dashboard>
      
      
    </>
  );
}
