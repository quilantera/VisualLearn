interface AtividadeRootProps{
    navegacaoAberta: boolean;
    children: React.ReactNode;
}
export function AtividadeProfessorRoot({navegacaoAberta, children}:AtividadeRootProps) {
    return(
        <section 
            role="region" 
            aria-label="Atividade" 
            className={` py-10 pr-[25%]
                ${ navegacaoAberta ? "pl-64" : "pl-24"}  duration-300
                flex flex-col w-full items-center dark:bg-gray-900 dark:text-white
        `} >
                
            {children}
        </section>
    )
    
}