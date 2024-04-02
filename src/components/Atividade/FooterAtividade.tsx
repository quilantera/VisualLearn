"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ModalEnviarResposta } from "../ModalEnviarResposta";
import { useCallback } from "react";

interface FooterAtividadeProps{
    perguntaAtual: number;
    ultimaPergunta: number;
    idAtividade: string;
    getTotalAcertos: () => number;
    setShowModal: () => void;
    session: string;
}
export function FooterAtividade({perguntaAtual, ultimaPergunta, idAtividade,getTotalAcertos,setShowModal,session}:FooterAtividadeProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const navegarPergunta = useCallback(
    (name: string, value: number) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, (value).toString())
 
      return params.toString()
    },
    [searchParams]
  )
    return(
        <footer className="flex w-full items-center justify-end gap-4">
              {perguntaAtual > 0? <button
              className="w-[6rem] bg-red-700 p-2 rounded text-white duration-300 hover:scale-105 hover:bg-red-800 dark:bg-gray-900 dark:border-4 dark:border-red-800"
              onClick={() =>  router.push(pathname + '?' + navegarPergunta("questao",perguntaAtual - 1))}
            >
              voltar
            </button>:<></> }
            {perguntaAtual < ultimaPergunta-1 ? (
              <button
                className="w-[6rem] bg-green-700 p-2 rounded text-white duration-300 hover:scale-105 hover:bg-green-800 dark:bg-gray-900 dark:border-4 dark:border-green-800 "
                onClick={() => router.push(pathname + '?' + navegarPergunta("questao",perguntaAtual + 1))}
              >
                Próxima
              </button>
            ) : (
              <ModalEnviarResposta 
                    idAtividade={idAtividade!}
                    totalQuestoes={ultimaPergunta}
                    getTotalAcertos={getTotalAcertos}
                    openStatusModal={()=>setShowModal()} 
                    session={session} />
            )}

        </footer>
    )
}