import { tarefasProfessor } from "@/app/(authenticated)/professor/tarefas/page";

interface TaskCardProps {
  atividade: tarefasProfessor;
}

export function TaskProfessorCard({ atividade }: TaskCardProps) {
  const cor = atividade.cor || 'bg-primary-500';
  const transformDate = (data: Date) => {
    const dia = String(data.getDate());
    const mes = String(data.getMonth() + 1);
    const ano = String(data.getFullYear());
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <div 
    tabIndex={0}
    className="relative flex w-full items-center justify-between overflow-hidden rounded-lg bg-zinc-50 px-6 py-4 shadow-lg duration-300 hover:scale-[1.02] dark:border-2 dark:border-white dark:bg-gray-900">
      <div className={`absolute left-0 h-full w-2 ${cor} dark:bg-slate-300`} />
      <div className="flex gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={atividade.urlImagem}
          alt={`Imagem para ${atividade.nome}`}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="ml-2">
          <h2 className="text-base font-semibold text-zinc-600 dark:text-white">
            {atividade.nomeDisciplina}
          </h2>
          <h3 className="text-lg font-semibold">{atividade.nome}</h3>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <h3 className="text-base font-medium">Prazo: {transformDate(new Date(atividade.prazo))}</h3>
        <h3
          className={`h-[2.2rem] w-[6.2rem] rounded border-2 px-2 py-1 text-center text-base font-medium `}
        >
           {atividade.alunosResponderam} / {atividade.totalAlunosDisponiveis}
         
        </h3>
        
      </div>
    </div>
  );
}
