"use client";
import { Questoes } from "@/types/typesStudent"
import { useRef, useState } from "react";
import { Atividade } from "./Atividade";

import { ImageBanner } from "./ImageBanner";
import { VideoPlayer } from "./VideoPlayer";
import { ModalExibirResultado } from "./ModalExibirResultado";
import { useSearchParams } from "next/navigation";

interface DashboardActivitiesProps {
  nomeAtividade: string;
  perguntas: Questoes[];
  idAtividade: string;
  session: string;
}

export function DashboardActivities ({ nomeAtividade, perguntas, idAtividade,session}: DashboardActivitiesProps) {
  const perguntaRef = useRef<HTMLDivElement>(null);
  
  const searchParams = useSearchParams()
 
  const posicaoPergunta = parseInt(searchParams.get('questao')||"0") || 0 
  const perguntaAtual = posicaoPergunta < 0 ? 0 : posicaoPergunta >= perguntas.length ? perguntas.length-1: posicaoPergunta;
  
  const [respostasTemporarias,setRespostasTemporarias] =useState(Array(perguntas.length).fill(null));
  
  const [showModal, setShowModal] = useState<boolean> (false);
  const handleRespostaChange = (posicaoResposta: number) => {
    setRespostasTemporarias(prevRespostas => {
      const updatedRespostas = [...prevRespostas]; // Create a new array
      updatedRespostas[perguntaAtual] = posicaoResposta;
      return updatedRespostas;
    });
  };
  function getTotalAcertos(){
    let totalAcertos = 0;
    for( let i= 0; i < perguntas.length; i++){
      if(perguntas[i].respostaCorreta === respostasTemporarias[i]){
        totalAcertos ++;
      }
    }
    return totalAcertos;
  }

  const { pergunta, urlImage,urlVideo, descricaoImagem, respostas } = perguntas[perguntaAtual];
  
  return (
    <>
    <section className="flex flex-col w-full py-10 mt-6 justify-center items-center  dark:text-white ">
      <Atividade.Root>
        <Atividade.Header
          nomeAtividade={nomeAtividade}
          perguntaAtual={perguntaAtual}
          totalPerguntas={perguntas.length}
        />
        <Atividade.Content>
          <Atividade.Questao>
            <h2 className="text-lg dark:text-zinc-50" ref={perguntaRef} tabIndex={0}>{pergunta}</h2>
            {urlImage && <ImageBanner imageUrl={urlImage!} imageDescription={perguntas[perguntaAtual].descricaoImagem!} /> }
            {urlVideo && <VideoPlayer urlVideo={urlVideo!}/>}
          </Atividade.Questao>
          <Atividade.Respostas>
            <Atividade.RespostasGroup
              respostas={respostas}
              selectedOption={respostasTemporarias[perguntaAtual]}
              handleRadioChange={handleRespostaChange}
            />
          </Atividade.Respostas>
          <Atividade.Footer perguntaAtual={perguntaAtual}
    ultimaPergunta={perguntas.length}
    idAtividade ={idAtividade}
    getTotalAcertos={() => getTotalAcertos()}
    setShowModal={()=>setShowModal}
    session={session}/>
        </Atividade.Content>
      </Atividade.Root>
    </section>
    { showModal && 
      <ModalExibirResultado nota={getTotalAcertos()} totalQuestoes={perguntas.length} /> }
    
    
  </>
  );
}
