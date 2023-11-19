import { AlertOctagon, CheckCircle, X, XOctagon } from "lucide-react";

import { ClockLoader } from "react-spinners";

interface PopupProps{
    message: string | null;
    state: string;
    onClose: ()=> void;
    timeDuration?: number;
}
export function Popup ({
    message,
    state,
    onClose,
    timeDuration = 10
}: PopupProps){
        let autoCloseTimer: ReturnType<typeof setTimeout>;
        autoCloseTimer = setTimeout(() => {
            onClose();
               }, timeDuration * 1000);
        
   const showState = (state: String) => {
        switch (state){
            case 'success':
                return  <CheckCircle size={28} color="#008009" strokeWidth={2} />
            case 'error':
                return <XOctagon size={28} color="#d50101" strokeWidth={2} />
            case 'loading':
                return <ClockLoader color="#3200a8" speedMultiplier={1.5} size={23}/>
            case 'info':    
                default:
                return <AlertOctagon size={28} color="#3200a8" strokeWidth={2} />
        }
        
    }

    return (
    <article className="bg-white flex py-2 px-3 z-50 rounded items-center shadow-lg drop-shadow-md fixed gap-2 top-9 animate-[open_1s] dark:bg-zinc-800 dark:text-white">
        <div>{showState(state)}</div>
        <div> {message} </div>
        <button onClick={onClose }> <X className="text-zinc-600 dark:text-white" /> </button>
    </article>
    
    )

}