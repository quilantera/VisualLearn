interface AtividadeRootProps{
    children: React.ReactNode;
}
export function AtividadeRoot({children}:AtividadeRootProps) {
    return(
        <div className="w-[90vw] sm:w-[95vw]  flex flex-col " role="region" aria-label="Atividade">
            {children}
        </div>
    )
    
}