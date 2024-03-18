interface AtividadeBodyProps{
    children: React.ReactNode;
}
export function BodyAtividade({children}:AtividadeBodyProps) {
    return( 
        <article className="mt-5 sm:py-[40px] sm:px-[14px] flex w-full flex-col gap-3 rounded-xl bg-white p-10 shadow-2xl drop-shadow-lg dark:bg-gray-900 dark:border-2 dark:border-slate-50">
        {children}
        </article>
    )
}