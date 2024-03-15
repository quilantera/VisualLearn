interface ActionCardRootProps{
    children: React.ReactNode;
    ariaLabel: string;
    
}
export function ActionCardRoot({children,ariaLabel}:ActionCardRootProps) {
    return(
        <div className="grid gap-4 min-h-[10.625rem] w-[16.75rem]  p-3 border  border-slate-200   rounded-md  shadow-lg duration-300 ease-in-out hover:scale-105 dark:border-2 dark:border-white dark:bg-zinc-950 " role="region" aria-label={ariaLabel}>
            {children}
        </div>
    )
    
}