interface ActionCardHeaderProps{
    children: React.ReactNode;
    color?: string;
}
export function ActionCardHeader({children,color}:ActionCardHeaderProps) {
    return(
        <div className={`w-full flex flex-col pb-2 ${color}`}>
            {children}
        </div>
    )
    
}