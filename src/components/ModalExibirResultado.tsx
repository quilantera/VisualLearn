import Link from 'next/link';

import { RadiusChart } from './RadiusChart/RadiusChart';
interface ModalExibirResultadoProps {
    nota: number;
    totalQuestoes: number;
}
export function ModalExibirResultado({nota, totalQuestoes}: ModalExibirResultadoProps) {
    
    return(
          <><div className="bg-black z-30 fixed top-0 left-0 inset-0  opacity-30 dark:opacity-90 w-screen h-screen "  style={{position:"fixed"}}>
          </div>
          <div className="bg-slate-50 rounded-xl opacity-100 z-50 shadow-lg fixed top-1/2 left-1/2 w-[42rem] max-w-4/6  px-7 py-[30px] dark:bg-black dark:border-white dark:border-2 " style={{"transform": "translate(-50%, -50%)","animation":"contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)" }}>
            <div className="font-semibold text-2xl mb-6 flex flex-col gap-2 dark:text-slate-50">
                
                <div className='w-full flex flex-col items-center gap-4 justify-center'>
                Sua nota
                    <RadiusChart nota={nota!} total={totalQuestoes!}/>

                </div>
            </div>
            <div className=" flex flex-col items-center gap-3 tracking-wide text-medium text-zinc-800 mb-6 dark:text-slate-100">
              Sua resposta foi computada com sucesso, verifique se há a oportunidade de refazer o teste futuramente com o seu professor.
            </div>
            <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
           
              <div>
                <Link href={'/tarefas'} className=' bg-green-700 px-5 py-3 flex items-center shadow-lg tracking-wide rounded text-white  hover:bg-green-800  duration-300  dark:bg-black dark:text-white dark:border-4 dark:border-green-800 dark:hover:scale-105' >Concluir</Link>
              </div>
            </div>
          </div>
         </>
    )
}