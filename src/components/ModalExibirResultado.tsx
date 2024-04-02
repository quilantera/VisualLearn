"use client"
import Link from 'next/link';

import { RadiusChart } from './RadiusChart/RadiusChart';
import { useAccessibility } from '@/app/Context/AccessibilityContext';
interface ModalExibirResultadoProps {
    nota: number;
    totalQuestoes: number;
}
export function ModalExibirResultado({nota, totalQuestoes}: ModalExibirResultadoProps) {
  const {isReady, setIsReady} = useAccessibility();
  function atualizarLeitor(isReady: boolean){
  setIsReady(isReady);
  }
    return(
          <>{atualizarLeitor}<div className="bg-black  opacity-30 fixed h-screen inset-0 z-40 dark:opacity-90 "  style={{position:"fixed"}}>
          </div>
          <div className="bg-slate-50 rounded-xl z-50 shadow-lg fixed top-1/2 left-1/2 w-[40rem] max-w-[90vw] max-h-[87vh] sm:h-[75vh] sm:w-[95vw] sm:max-w-full px-[30px] py-[30px] dark:bg-black dark:border-white dark:border-2 " 
           style={{    "transform": "translate(-50%,-50%)",
           "animation": "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
           "overflowY": "auto"  }}
           >
            <div className="font-semibold text-2xl mb-6 flex flex-col gap-2 dark:text-slate-50">
                
                <div className='w-full flex flex-col items-center gap-4 justify-center'>
                Sua nota
                    <RadiusChart nota={nota!} total={totalQuestoes!} width='30%'/>

                </div>
            </div>
            <div className=" flex flex-col items-center gap-3 tracking-wide text-medium text-zinc-800 mb-6 dark:text-slate-100">
              Sua resposta foi computada com sucesso, verifique se há a oportunidade de refazer o teste futuramente com o seu professor.
            </div>
            <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
           
              <div>
                <Link href={'/tarefas'}  className=' bg-green-700 px-5 py-3 flex items-center shadow-lg tracking-wide rounded text-white  hover:bg-green-800  duration-300  dark:bg-black dark:text-white dark:border-4 dark:border-green-800 dark:hover:scale-105' >Concluir</Link>
              </div>
            </div>
          </div>
         </>
    )
}