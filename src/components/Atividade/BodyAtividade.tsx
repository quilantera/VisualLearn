interface AtividadeBodyProps{
    children: React.ReactNode;
}
export function BodyAtividade({children}:AtividadeBodyProps) {
    return( 
        <article className="mt-5 flex w-full flex-col gap-3 rounded-xl bg-white p-10 shadow-2xl drop-shadow-lg dark:bg-gray-600">
        {children}
        </article>
    )
}