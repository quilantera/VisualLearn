"use client";
import { Questoes } from "@/utils/perguntasAreasPerimetros";
import { useRef, useState } from "react";
import { Atividade } from "./Atividade";

import { ModalEnviarResposta } from "./ModalEnviarResposta";
import { ImageBanner } from "./ImageBanner";
import { VideoPlayer } from "./VideoPlayer";

interface DashboardActivitiesProps {
  nomeAtividade: string;
  perguntas: Questoes[];
}

export function DashboardActivities ({ nomeAtividade, perguntas }: DashboardActivitiesProps) {
  const perguntaRef = useRef<HTMLDivElement>(null);
  const [perguntaAtual, setPerguntaAtual] = useState<number>(0);
  const [resposta, setResposta] = useState<(number | null)[]>(Array(perguntas.length).fill(null));

  const handleRespostaChange = (resposta: number) => {
    setResposta(prevResposta => prevResposta.map((prevResposta, index) =>
      index === perguntaAtual ? resposta : prevResposta
    ));
  };

  const navegarPergunta = async (novaPergunta: number) => {
    if (novaPergunta >= 0 && novaPergunta < perguntas.length) {
     await setPerguntaAtual(novaPergunta);
      perguntaRef.current?.focus();
    }
  };

  const ultimaPergunta = () => perguntaAtual === perguntas.length - 1;


  const { pergunta, urlImage,urlVideo, descricaoImagem, respostas } = perguntas[perguntaAtual];

  return (
    <section className="flex flex-col w-full pt-10 mt-6 justify-center items-center dark:bg-gray-800 dark:text-white ">
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
              selectedOption={resposta[perguntaAtual]}
              handleRadioChange={handleRespostaChange}
            />
          </Atividade.Respostas>
          <Atividade.Footer>
            {perguntaAtual > 0? <button
              className="w-[6rem] bg-red-700 p-2 rounded text-white duration-300 hover:scale-105 hover:bg-red-800 dark:bg-gray-900 dark:border-4 dark:border-red-800"
              onClick={() => navegarPergunta(perguntaAtual - 1)}
            >
              voltar
            </button>:<></> }
            {!ultimaPergunta() ? (
              <button
                className="w-[6rem] bg-green-700 p-2 rounded text-white duration-300 hover:scale-105 hover:bg-green-800 dark:bg-gray-900 dark:border-4 dark:border-green-800 "
                onClick={() => navegarPergunta(perguntaAtual + 1)}
              >
                Próxima
              </button>
            ) : (
              <ModalEnviarResposta />
            )}
          </Atividade.Footer>
        </Atividade.Content>
      </Atividade.Root>
    </section>
  );
}
