import { X } from "lucide-react";

interface HeaderModalProps{
    onClose: () => void;
}
export function HeaderModal( {onClose}: HeaderModalProps){
    return (
        <header className="absolute top-[8px] right-[8px]">
            <button 
                onClick={()=> {onClose()}}
                aria-label="botão fechar modal"
                 className=" duration-150 px-[4px] py-[4px] rounded text-gray-900   hover:text-white hover:bg-blue-900 "
                 >
                <X size={"2rem"} className="h-full  dark:text-white"/>
            </button>
        </header>
    )
}