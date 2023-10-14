interface FooterAtividadeProps{
    children: React.ReactNode
}
export function FooterAtividade({children}:FooterAtividadeProps) {
    return(
        <footer className="flex w-full items-center justify-end gap-4">
            {children}
        </footer>
    )
}