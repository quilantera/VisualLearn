interface HeaderAtividadeProfessorProps {
    useRef:  React.RefObject<HTMLDivElement>;
    nomeAtividade: string;
    totalAtividade: number;
    atividadeAtual: number;
    handleNomeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export function HeaderAtividadeProfessor({useRef, nomeAtividade, totalAtividade, atividadeAtual, handleNomeChange }: HeaderAtividadeProfessorProps) {
    return (
        <>
        <div className="flex w-full  justify-between align-center pb-3 mt-4">
         <div className="flex gap-2 items-center w-full" >
        <label  tabIndex={0} className="text-2xl font-bold" htmlFor="nomeAtividade">
                Nome da Atividade:
            </label>
            <input
                className=' py-2 px-3 rounded  w-[50%] min-w-[10rem] shadow-sm bg-slate-50 dark:bg-gray-700 dark:border'
                type='text'
                aria-label={`Area de inserção  do nome da Atividade: ${nomeAtividade}`}
                aria-labelledby='perguntaInput'
                value={nomeAtividade}
                onChange={handleNomeChange}
            />
        </div>
        <div className="flex items-center gap-3 px-2 self-end h-full"  ref={useRef} tabIndex={0} aria-label={`Atividade`} >
        
        <div aria-label={`${atividadeAtual + 1}`}
            
            className="flex h-[2.3rem] w-[2.3rem] items-center justify-center rounded-lg border-2 border-primary-400 bg-white text-lg font-medium shadow-lg drop-shadow-md dark:bg-gray-900 dark:border-slate-300">
            {totalAtividade>0 ? atividadeAtual + 1 : 0}
        </div>
        <p className="text-lg font-semibold">De</p>
        <div aria-label={`${totalAtividade}`}

            className="flex h-[2.3rem] w-[2.3rem] items-center  justify-center rounded-lg border-2 border-primary-400 bg-primary-400 text-lg font-medium text-white shadow-lg drop-shadow-md dark:border-yellow-600 dark:bg-gray-900 dark:text-slate-50">
            {totalAtividade}
        </div>
    </div>
    </div>
    </>
    )
}