// AtividadeHeader.tsx
interface AtividadeHeaderProps {
  nomeAtividade: string;
  perguntaAtual: number;
  totalPerguntas: number;
}

export function AtividadeHeader({
  nomeAtividade,
  perguntaAtual,
  totalPerguntas,
}: AtividadeHeaderProps) {
  return (
    <div className="flex w-10/12 items-center justify-between">
      <h1 className="text-2xl font-bold">{nomeAtividade}</h1>
      <div className="flex items-center gap-3 px-2">
        <div className="flex h-[2.3rem] w-[2.3rem] items-center justify-center rounded-lg border-2 border-primary-400 bg-white text-lg font-medium shadow-lg drop-shadow-md dark:bg-gray-600">
          {perguntaAtual + 1}
        </div>
        <p className="text-lg font-semibold">De</p>
        <div className="flex h-[2.3rem] w-[2.3rem] items-center  justify-center rounded-lg border-2 border-primary-400 bg-primary-400 text-lg font-medium text-white shadow-lg drop-shadow-md dark:border-yellow-600 dark:bg-yellow-500 dark:text-gray-800">
          {totalPerguntas}
        </div>
      </div>
    </div>
  );
}
