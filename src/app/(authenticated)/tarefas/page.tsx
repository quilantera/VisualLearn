import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Dashboard } from "@/components/Dashboard";
import { ShowTasks } from "@/components/ShowTasks";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default  async function Tarefas() {
  const session = await getServerSession(nextAuthOptions);
  if (session!.papel !== "ALUNO"){
    redirect('/');
 }
  const atividadesResponse =  await axios.get(`${process.env.BASE_URL}/api/atividades`,{
    headers: {
      'idUser': session?.id ,
    },
  });
  const atividades = atividadesResponse.data;

  return (
    <>
      <Dashboard >
        <div className="mb-3 flex w-full justify-between px-2">
          <h2 className="text-3xl font-semibold text-primary-700 dark:text-white">
            Tarefas
          </h2>
        </div>
        <ShowTasks atividades={atividades}  />
      </Dashboard>
      
      
    </>
  );
}
