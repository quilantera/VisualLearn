'use client'
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { ChevronLeft } from 'lucide-react';
import Image from "next/image";
import AstronautaVoltar from "../assets/astronauta_indeciso.jpg"

import Link from 'next/link';
import { RefreshContentToSpeak } from './RefreshContentToSpeak';

export function VoltarBtn(){
 
    return(
        <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <button 
          aria-label='sair da atividade'
          className="flex items-center text-lg font-semibold tracking-wide text-zinc-50 decoration-2 underline-offset-4 hover:underline ">
            <ChevronLeft className="h-7 w-7" />
            Sair  
          </button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
        
          <AlertDialog.Overlay className="bg-black z-50  bg-opacity-30 fixed flex items-center justify-center overflow-y-scroll w-screen h-screen inset-0 dark:bg-opacity-90 " >
          <AlertDialog.Content tabIndex={0} className="bg-slate-50 rounded-xl shadow-lg w-[40rem] max-w-[90vw]  sm:h-[75vh] sm:w-[95vw] sm:max-w-full px-[30px] py-[30px] dark:bg-black dark:border-white dark:border-2 " 
          style={{  "animation": "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)" }}>
            <AlertDialog.Title className="font-semibold text-2xl mb-[24px] dark:text-slate-50">Tem certeza que deseja sair?</AlertDialog.Title>
            <AlertDialog.Description className=" flex flex-col items-center gap-[12px] tracking-wide text-medium text-zinc-800 mb-[24px] dark:text-slate-100">
                Se você sair agora, o progresso desta atividade não será salvo e será perdido. Certifique-se de terminar a atividade antes de sair para que possa continuar de onde parou da próxima vez que entrar.
                <Image src={AstronautaVoltar} alt='Astronauta indeciso' height={300} width={300} className='w-[38%]  sm:w-full max-w-[300px] self-center' />
            </AlertDialog.Description>
            <div  className='flex gap-[30px] justify-end sm:gap-[4px]'>
              <AlertDialog.Cancel asChild>
                <button className="bg-zinc-300  duration-300 rounded font-medium  sm:px-[14px] sm:py-[8px] px-[20px] py-[12px] text-gray-950 shadow-lg hover:bg-zinc-400 dark:bg-black dark:text-white dark:border-4 dark:border-sky-900 dark:hover:scale-105" aria-label='botão cancelar'>cancelar</button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Link href="/" className="bg-green-700 sm:text-center sm:text-[18px] text-white px-[20px] py-[12px] rounded shadow-lg hover:bg-green-900 duration-300 dark:bg-black dark:border-4 dark:border-red-900 dark:hover:scale-105"  aria-label='botão sair da atividade' >sim, desejo sair</Link>
              </AlertDialog.Action>
              <RefreshContentToSpeak/>
            </div>
          </AlertDialog.Content>
          </AlertDialog.Overlay>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    )
}