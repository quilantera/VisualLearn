"use client";
import { Questoes } from "@/types/typesStudent"
import { useEffect, useRef, useState } from "react";
import { Atividade } from "./Atividade";

import { ImageBanner } from "./ImageBanner";
import { VideoPlayer } from "./VideoPlayer";
import { ModalExibirResultado } from "./ModalExibirResultado";
import { useSearchParams } from "next/navigation";
import { AuxTextPanel } from "./AuxTextPanel";
import { ZoomedImageBanner } from "./ZoomedImageBanner";

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
  const [openImage, setOpenImage] = useState<boolean>(false);

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
  

  useEffect(() => {
    // Foca na pergunta atual quando ela muda
    if (perguntaRef.current) {
      perguntaRef.current.focus();
    }
  }, [perguntaAtual]);
  
  const handleCloseImage = () => setOpenImage(false);
  const handleOpenImage = () => setOpenImage(true);
  const handleShowModal = () => setShowModal(true);
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
            <div className="flex gap-[8px] "><div className=" font-medium font-words text-2xl h-10 w-10 border-[3px] mt-[1px] dark:text-white border-sky-900 dark:border-yellow-500 rounded-full flex items-center justify-center"><span>{perguntaAtual+1}</span></div> <h2  className=" max-w-[92%] mt-[2px] text-2xl font-words font-normal text-justify dark:text-slate-50" ref={perguntaRef} tabIndex={0}>{perguntas[perguntaAtual].pergunta}</h2></div>
            {perguntas[perguntaAtual].textoAuxiliar && <AuxTextPanel text={perguntas[perguntaAtual].textoAuxiliar!} reference={perguntas[perguntaAtual].referenciaTexto}/>}
            {perguntas[perguntaAtual].urlVideo && <VideoPlayer urlVideo={perguntas[perguntaAtual].urlVideo!}/>}
            {perguntas[perguntaAtual].urlImage && <ImageBanner imageUrl={perguntas[perguntaAtual].urlImage!} imageDescription={perguntas[perguntaAtual].descricaoImagem!} referenceImage={perguntas[perguntaAtual].referenciaImagem} openZoomImage={handleOpenImage}/> }
          </Atividade.Questao>
          <Atividade.Respostas>
            <Atividade.RespostasGroup
              respostas={perguntas[perguntaAtual].respostas}
              selectedOption={respostasTemporarias[perguntaAtual]}
              handleRadioChange={handleRespostaChange}
            />
          </Atividade.Respostas>
          <Atividade.Footer 
                perguntaAtual={perguntaAtual}
                ultimaPergunta={perguntas.length}
                idAtividade ={idAtividade}
                getTotalAcertos={getTotalAcertos}
                setShowModal={handleShowModal}
                session={session}/>
        </Atividade.Content>
      </Atividade.Root>
    </section>
    { showModal && 
      <ModalExibirResultado nota={getTotalAcertos()} totalQuestoes={perguntas.length} /> }
   {perguntas[perguntaAtual].urlImage && openImage && <ZoomedImageBanner onClose={handleCloseImage} imageUrl={perguntas[perguntaAtual].urlImage!}/>}
  </>
  );
}
