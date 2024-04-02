interface AuxTextPanelProps{
    text: string;
    title?: string;
    reference?: string;
}
export function AuxTextPanel({text,title, reference}: AuxTextPanelProps){

    return(
        <div tabIndex={1}  aria-label={"texto de apoio: "} className={`w-full min-h-[40vh] rounded max-h-[90vh] overflow-y-auto bg-slate-100 dark:bg-gray-800 border border-slate-500 dark:border-slate-100  p-[16px] my-[24px]`}>
            {title && <h3 className="text-2xl leading-relaxed text-gray-900 dark:text-white font-bold text-center pb-[8px]">{title}</h3>}
            <p className="text-xl leading-loose text-gray-900 text-justify  font-medium dark:text-slate-50">{text}</p>
            <span className="text-base text-center py-[8px]">{reference}</span>        
        </div>
    )
}