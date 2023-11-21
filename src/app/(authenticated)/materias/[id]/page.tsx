import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Dashboard } from "@/components/Dashboard";
import { TaskCard } from "@/components/TaskCard";
import { Materia } from "@/types/typesBanco";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default  async function MateriaPage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(nextAuthOptions);
  if(session?.papel !== "ALUNO"){
    redirect('/');
  }
  const materiaResponse =  await axios.get(`${process.env.BASE_URL}/api/materias/${params.id}`,{
    headers: {
      'idUser': session?.id ,
    },
  });
  const materia: Materia = materiaResponse.data;
  const atividades = materia.atividades
  return (
    <>
    <Dashboard >
      <div
       tabIndex={0}
      className={`flex  w-full flex-col justify-center gap-2 rounded-xl ${materia?.cor ? materia?.cor : 'bg-primary-500'} px-8 py-5 shadow-md dark:bg-gray-900 `}>
        <h2 className="w-fit break-words bg-black bg-opacity-70 px-2 py-1 text-2xl font-semibold tracking-[1px]  text-white">
         6º ano  {materia?.nome}
        </h2>
        <h3 className="w-fit bg-black bg-opacity-70 px-2 py-1 text-xl font-normal tracking-[1px] text-white">
          Professor: {materia?.professor.nome}
        </h3>
      </div>
      <div className="scrollbar mt-10 h-[320px] w-full overflow-y-scroll rounded bg-zinc-100 p-6 shadow-xl dark:border-2 dark:border-white dark:bg-gray-800">
        <div className="flex flex-col gap-4">
          {atividades.map((atividade, index) => (
            <TaskCard key={index} atividade={atividade} materiaNome={materia.nome}/>
          ))}
        </div>
      </div>
    </Dashboard >
    </>
  );
}
