interface ActionCardFooterProps{
    children: React.ReactNode;
    color?: string;
}
export function ActionCardFooter({children,color}:ActionCardFooterProps) {
    return(
        <div className={`w-full flex  ${color}`}>
            {children}
        </div>
    )
}