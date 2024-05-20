interface BodyModalProps{
    children: React.ReactNode;
}
export function BodyModal({children}: BodyModalProps){
    return(
        <section className="flex flex-col w-full py-[40px]">
            {children}
        </section>
    )
}