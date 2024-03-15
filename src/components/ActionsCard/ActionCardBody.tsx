interface ActionCardBodyProps{
    children: React.ReactNode;
    color?: string;
}
export function ActionCardBody({children,color}:ActionCardBodyProps) {
    return(
        <div className={`w-full flex gap-2 flex-col pb-2 ${color}`}>
            {children}
        </div>
    )
    
}