"use client"
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import Image from 'next/image';
import imagem1 from '../assets/astronauta_voando.jpg';
import imagem2 from '../assets/astronauta_lua.jpg';
import imagem3 from '../assets/astronauta_com_estrela.jpg';
import axios from 'axios';
import { Popup } from "./Popup";
import { useState } from 'react';
interface modalExibirResultadoProps {

  idAtividade: string;
  totalQuestoes: number;
  openStatusModal: (state:boolean) => void;
  getTotalAcertos: () => number;
  session: string;
}
export function ModalEnviarResposta({getTotalAcertos, idAtividade, openStatusModal, session}: modalExibirResultadoProps) {
  const [popupType, setPopupType] = useState<string | null>(null);
  const [messagePopup, setMessagePopup] = useState<string | null>("sem mensagem");
  
  const nota = getTotalAcertos()  ;
  const handlePopupClose = () => {
    setPopupType(null);
  };
  function changePopupState(state: string, message:string) {
    setMessagePopup(message);
    setPopupType(state);
  }
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
   
    async function handleClick(){
     
      changePopupState('loading','por favor, aguarde');
      
      try {
        if (idAtividade && session != null) {
        const atividadeEnviada = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/students/lessons/send`, {
           nota: nota,
           idAtividade: idAtividade,
           delivery: new Date(),
        },{ headers: {
           'idUser': session ,
         },
       });
       if (!atividadeEnviada){
     await changePopupState('error','Erro ao enviar dados, por favor tente novamente mais tarde');
        return 
       }
       changePopupState('success','Respostas enviadas com sucesso');
       await openStatusModal(true); 
        return 
      }
    }catch(error){
      changePopupState('error',`Erro interno do servidor: ${error}`);
      return 
      }
       
   }
    return(
      <>
    {popupType && 
   
    <Popup 
      message={messagePopup} 
      state={
        popupType === "loading" ? "loading" :
        popupType === "success" ? "success" :
        popupType === "error" ? "error" :
        "alert"} 
    onClose={handlePopupClose} />
    }
        <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <button className="w-[6rem] bg-green-700 p-2 rounded text-white duration-300 hover:scale-105 hover:bg-green-800 ">
            Enviar
          </button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className=" bg-black  opacity-30 fixed h-screen inset-0 z-40 dark:opacity-90 "
           style={{"animation": "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)"}} />
            <AlertDialog.Content tabIndex={0} className="bg-slate-50 rounded-xl z-50 shadow-lg fixed top-1/2 left-1/2 w-[40rem] max-w-[90vw] max-h-[87vh] sm:h-[75vh] sm:w-[95vw] sm:max-w-full px-[30px] py-[30px] dark:bg-black dark:border-white dark:border-2 " 
             style={{    "transform": "translate(-50%,-50%)",
             "animation": "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
             "overflowY": "auto"  }}>
            <AlertDialog.Title className="font-semibold text-2xl mb-[24px] dark:text-slate-50">Confirmar Entrega</AlertDialog.Title>
            <AlertDialog.Description className=" flex flex-col items-center gap-[12px] tracking-wide text-medium text-zinc-800 mb-[24px] dark:text-slate-100">
                Deseja enviar suas respostas? essa tarefa não poderá ser desfeita.
                <Image src={imagem()} alt='imagem astronauta' height={1000} width={1000} className='w-[35%]  max-w-[300px] self-center rounded-md shadow-md' />
            </AlertDialog.Description>
            <div className='flex gap-[30px] justify-end sm:gap-[4px]'>
              <AlertDialog.Cancel asChild>
                <button className="bg-zinc-300  rounded font-medium px-[20px] py-[12px] text-gray-950 shadow-lg hover:bg-zinc-400 duration-300  dark:bg-black dark:text-white dark:border-4 dark:border-sky-900 dark:hover:scale-105">cancelar</button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
              <button onClick={() => handleClick()} className=' bg-green-700 px-[20px] py-[12px] flex items-center shadow-lg tracking-wide rounded text-white  hover:bg-green-800  duration-300  dark:bg-black dark:text-white dark:border-4 dark:border-green-800 dark:hover:scale-105' >Enviar</button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
      </>
    )
}