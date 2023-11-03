import { Atividade } from "@/types/typesBanco";
import Link from "next/link";

interface TaskCardProps {
  atividade: Atividade;
  materiaNome: string;
}

export function TaskCard({ atividade, materiaNome }: TaskCardProps) {
  const cor = atividade.cor || 'bg-primary-500';
  const transformDate = (data: Date) => {
    const dia = String(data.getDate());
    const mes = String(data.getMonth() + 1);
    const ano = String(data.getFullYear());
    return `${dia}/${mes}/${ano}`;
  };

  const getStatus = () => {
    if (atividade.atividadesAluno && atividade.atividadesAluno[0]?.dataEntrega) {
      return "entregue";
    }
    if (new Date(atividade.prazo) < new Date()) {
      return "atraso";
    }
    return "pendente";
  };
  

  const getStatusColor = () => {
    switch (getStatus()) {
      case "pendente":
        return "flex items-center justify-center text-yellow-800 border-yellow-800 bg-yellow-200 dark:text-white dark:bg-gray-800 dark:border-4";
      case "entregue":
        return "flex items-center justify-center  text-green-800 border-green-800 bg-green-200 dark:text-white dark:bg-gray-800 dark:border-4";
      case "atraso":
      default:
        return "flex items-center justify-center text-red-800 border-red-800 bg-red-200 dark:text-white dark:bg-gray-800 dark:border-4";
    }
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
            {materiaNome}
          </h2>
          <h3 className="text-lg font-semibold">{atividade.nome}</h3>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <h3 className="text-base font-medium">Prazo: {transformDate(new Date(atividade.prazo))}</h3>
        <h3
          className={`h-[2.2rem] w-[6.2rem] rounded border-2 px-2 py-1 text-center text-base font-medium ${getStatusColor()}`}
        >
          {getStatus()}
        </h3>
        <Link
          href={`/atividade/${atividade.id}`}
          title="Iniciar Exercício"
          className="rounded bg-primary-400 px-3 py-[0.425rem] font-medium tracking-[1px] text-zinc-200 duration-300 ease-in-out hover:bg-blue-900 dark:border-2 dark:border-white dark:bg-gray-800 dark:hover:bg-slate-50 dark:hover:text-gray-800"
        >
          Iniciar
        </Link>
      </div>
    </div>
  );
}
