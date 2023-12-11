import { FileImage, Type, Youtube } from "lucide-react";


interface PanelProps {
  isImageOpen: boolean;
  isTextOpen: boolean;
  isVideoOpen: boolean;
  onImageClick: () => void;
  onTextClick: () => void;
  onVideoClick: () => void;
}

export function PainelAtividades({
  isImageOpen,
  isTextOpen,
  isVideoOpen,
  onImageClick,
  onTextClick,
  onVideoClick,
}: PanelProps) {
  return (
    <aside
    tabIndex={0}
    className={`   py-[30px] px-[24px] gap-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg drop-shadow-xl w-[19%] min-h-[60vh] duration-300 fixed top-[20%] right-8 flex flex-col items-center dark:border dark:border-slate-300 dark:text-white`}>
      <h2 className="text-xl font-semibold mb-10 text-center">Painel de Elementos</h2>
      <button
       onClick={onTextClick}
       aria-label="botão adicionar Texto"
       className={`shadow-md w-full flex flex-col  rounded-lg 
       items-center h-[96px] justify-center mx-2  border-2 hover:bg-slate-50 dark:hover:bg-gray-500  hover:translate-y-[-4px]  
       ${isTextOpen ? 'bg-slate-300 hover:bg-slate-300 dark:text-black dark:hover:text-slate-300 dark:font-medium' : ''}  duration-300`}>
        <Type size={30} />
        Texto
      </button>
      <button onClick={onImageClick} 
      aria-label="botão adicionar Imagem"
      className={`shadow-md w-full flex flex-col  rounded-lg
        items-center h-[96px] justify-center mx-2  border-2 hover:bg-slate-50 dark:hover:bg-gray-500 hover:translate-y-[-4px]
         ${isImageOpen ? 'bg-slate-300 hover:bg-slate-300 dark:hover:text-slate-300 dark:text-black dark:font-medium' : ''} duration-300`}>
      <FileImage size={30} />
        imagem
      </button>
      <button onClick={onVideoClick}
      aria-label="botão adicionar Video"
       className={`shadow-md w-full flex flex-col  rounded-lg
        items-center h-[96px] justify-center mx-2  border-2 hover:bg-slate-50  dark:hover:bg-gray-500 hover:translate-y-[-4px] ${isVideoOpen ? 'bg-slate-300 hover:bg-slate-300 dark:text-black  dark:hover:text-slate-300 dark:font-medium' : ''} duration-300`}>
      <Youtube size={30} />
        Video
      </button>
    </aside>
  );
}
