import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import imagem1 from '../assets/astronauta_voando.jpg';
import imagem2 from '../assets/astronauta_lua.jpg';
import imagem3 from '../assets/astronauta_com_estrela.jpg';
import Link from 'next/link';
export function ModalEnviarResposta(){
    const imagem = ()=> { 
        switch(Math.floor(Math.random() * 4)){
        case 0: 
            return imagem1;
        case 1: 
            return imagem2;
        case 2:
        default: 
            return imagem3;
        }
        
    }
    return(
        <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <button className="w-[6rem] bg-green-700 p-2 rounded text-white duration-300 hover:scale-105 hover:bg-green-800 ">
            Enviar
          </button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="bg-black fixed inset-0 z-20 opacity-30 dark:opacity-90 " style={{"animation": "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);"}} />
          <AlertDialog.Content className="bg-slate-50 rounded-xl z-30 shadow-lg fixed top-1/2 left-1/2 w-[42rem] max-w-4/6  px-7 py-[30px] dark:bg-black dark:border-white dark:border-2 " style={{"transform": "translate(-50%, -50%)","animation":"contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)" }}>
            <AlertDialog.Title className="font-semibold text-2xl mb-6 dark:text-slate-50">Tem certeza que deseja sair?</AlertDialog.Title>
            <AlertDialog.Description className=" flex flex-col items-center gap-3 tracking-wide text-medium text-zinc-800 mb-6 dark:text-slate-100">
                Deseja enviar suas respostas? essa tarefa não poderá ser desfeita.
                <Image src={imagem1} alt='imagem astronauta' height={1000} width={1000} className='w-[38%] self-center' />
            </AlertDialog.Description>
            <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
              <AlertDialog.Cancel asChild>
                <button className="bg-zinc-300  rounded font-medium px-5 py-3 text-gray-950 shadow-lg hover:bg-zinc-400 duration-300  dark:bg-black dark:text-white dark:border-4 dark:border-sky-900 dark:hover:scale-105">cancelar</button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Link href={'/tarefas'} className=' bg-green-700 px-5 py-3 flex items-center shadow-lg tracking-wide rounded text-white  hover:bg-green-800  duration-300  dark:bg-black dark:text-white dark:border-4 dark:border-green-800 dark:hover:scale-105' >Enviar</Link>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    )
}