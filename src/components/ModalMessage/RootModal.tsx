interface RootModalProps{
    children: React.ReactNode;

}
export function RootModal({children}: RootModalProps){
    return(
        <div className="fixed top-0 left-0 right-0 bottom-0 h-screen w-screen bg-gray-900 bg-opacity-[0.7] dark:bg-opacity-[0.9] z-50 flex justify-center items-center overflow-y-auto">
           <div  
                className="animate-[open_0.5s] relative flex flex-col px-[32px] min-w-[200px] w-[30rem] max-w-[90vw] min-h-[60vh] rounded-lg shadow-lg drop-shadow-md bg-slate-50 border-2 border-slate-500 dark:bg-gray-800 dark:border-slate-50"
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="dialog_label"
                aria-describedby="dialog_desc"
            >
                {children}
           </div>
           
        </div>
    )
}