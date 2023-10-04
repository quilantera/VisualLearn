"use client";
import { Pergunta } from "@/app/(activities)/atividade/[activityId]/page";
import { useRef, useState } from "react";
import { AtividadeHeader } from "./AtividadeHeader";
import { AtividadeBody } from "./AtividadeBody";

interface DashboardActivitiesProps {
  nomeAtividade: string;
  perguntas: Pergunta[];
}
export function DashboardActivities({
  nomeAtividade,
  perguntas,
}: DashboardActivitiesProps) {
  const perguntaRef = useRef<HTMLDivElement>(null);
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const [perguntaAtual, setPerguntaAtual] = useState<number>(0);

  const [respostas, setRespostas] = useState<(number | null)[]>(
    Array(perguntas.length).fill(null)
  );
  const handleRespostaChange = (resposta: number) => {
    const novasRespostas = [...respostas];
    novasRespostas[perguntaAtual] = resposta;
    setRespostas(novasRespostas);
  };

  const proximaPergunta = async () => {
    if (perguntaAtual < perguntas.length - 1) {
     await setPerguntaAtual(perguntaAtual + 1);
      perguntaRef.current?.focus();
    }
  };

  const perguntaAnterior = async () => {
    if (perguntaAtual > 0) {
      await setPerguntaAtual(perguntaAtual - 1);
      perguntaRef.current?.focus();
    }
  };
 function ultimaPergunta()
 { 
  if(perguntaAtual  == perguntas.length - 1){
    return true
  } else 
    return false;
 } 

  const todasPerguntasRespondidas = respostas.every(
    (resposta) => resposta !== null
  );

  return (
    <section className="flex flex-col w-full pt-10 mt-6 justify-center items-center dark:bg-gray-800 dark:text-white ">
      <AtividadeHeader
        nomeAtividade={nomeAtividade}
        perguntaAtual={perguntaAtual}
        totalPerguntas={perguntas.length}
        perguntaRef={perguntaRef}
      />
      <AtividadeBody
        pergunta={perguntas[perguntaAtual].pergunta}
        respostas={perguntas[perguntaAtual].respostas}
        selectedOption={respostas[perguntaAtual]}
        handleRadioChange={handleRespostaChange}
        proximaPergunta={proximaPergunta}
        perguntaAnterior={perguntaAnterior}
        letters={letters}
        imagem={perguntas[perguntaAtual].urlImage || ""}
        imagemDescricao={perguntas[perguntaAtual].descricaoImagem || ""}
        isUltimaPergunta={ultimaPergunta}
       
      />

    </section>
  );
}
